#!/usr/bin/env python3
"""Capture exact desktop and mobile route screenshots through Chrome DevTools."""

from __future__ import annotations

import argparse
import base64
import json
import socket
import subprocess
import tempfile
import time
import urllib.request
from pathlib import Path
from typing import Any

import websocket

ROUTES = {
    "home": "/",
    "projects": "/projects/",
    "about": "/about/",
    "writing": "/archives/",
    "topics": "/tags/",
    "tag-detail": "/tags/mlops/",
    "genai-post": "/posts/serving-genai-at-100k-calls-a-day/",
    "mlops-post": "/posts/designing-a-unified-mlops-framework/",
    "welcome-post": "/posts/welcome/",
    "not-found": "/404.html",
}

VIEWPORTS = {
    "desktop": {"width": 1440, "height": 1200, "mobile": False},
    "mobile": {"width": 390, "height": 844, "mobile": True},
}


def free_port() -> int:
    with socket.socket() as candidate:
        candidate.bind(("127.0.0.1", 0))
        return int(candidate.getsockname()[1])


class DevTools:
    def __init__(self, url: str) -> None:
        self.socket = websocket.create_connection(url, timeout=10, origin="http://127.0.0.1")
        self.request_id = 0

    def call(self, method: str, params: dict[str, Any] | None = None) -> dict[str, Any]:
        self.request_id += 1
        request_id = self.request_id
        self.socket.send(json.dumps({"id": request_id, "method": method, "params": params or {}}))
        while True:
            response = json.loads(self.socket.recv())
            if response.get("id") != request_id:
                continue
            if "error" in response:
                raise RuntimeError(f"{method}: {response['error']}")
            return response.get("result", {})

    def close(self) -> None:
        self.socket.close()


def page_target(port: int) -> str:
    endpoint = f"http://127.0.0.1:{port}/json/list"
    for _ in range(50):
        try:
            targets = json.load(urllib.request.urlopen(endpoint, timeout=1))
            page = next(target for target in targets if target.get("type") == "page")
            return str(page["webSocketDebuggerUrl"])
        except Exception:
            time.sleep(0.2)
    raise RuntimeError("Chrome DevTools target did not become available")


def wait_until_ready(devtools: DevTools) -> None:
    expression = """
      JSON.stringify({
        state: document.readyState,
        fonts: document.fonts ? document.fonts.status : 'loaded',
        images: Array.from(document.images).every(image => image.complete)
      })
    """
    for _ in range(80):
        result = devtools.call("Runtime.evaluate", {"expression": expression, "returnByValue": True})
        value = result.get("result", {}).get("value", "{}")
        status = json.loads(value)
        if status == {"state": "complete", "fonts": "loaded", "images": True}:
            time.sleep(0.35)
            return
        time.sleep(0.1)
    raise RuntimeError("Page assets did not settle before screenshot")


def capture_all(chrome: str, base_url: str, output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    port = free_port()

    with tempfile.TemporaryDirectory(prefix="portfolio-capture-") as profile:
        process = subprocess.Popen(
            [
                chrome,
                "--headless=new",
                "--no-sandbox",
                "--disable-gpu",
                "--hide-scrollbars",
                "--disable-smooth-scrolling",
                "--force-prefers-reduced-motion",
                "--remote-allow-origins=*",
                f"--remote-debugging-port={port}",
                f"--user-data-dir={profile}",
                "about:blank",
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        devtools: DevTools | None = None
        try:
            devtools = DevTools(page_target(port))
            devtools.call("Page.enable")
            devtools.call("Runtime.enable")

            for route_name, route in ROUTES.items():
                for viewport_name, viewport in VIEWPORTS.items():
                    width = int(viewport["width"])
                    height = int(viewport["height"])
                    mobile = bool(viewport["mobile"])
                    devtools.call(
                        "Emulation.setDeviceMetricsOverride",
                        {
                            "width": width,
                            "height": height,
                            "deviceScaleFactor": 1,
                            "mobile": mobile,
                            "screenWidth": width,
                            "screenHeight": height,
                        },
                    )
                    devtools.call("Page.navigate", {"url": base_url.rstrip("/") + route})
                    wait_until_ready(devtools)
                    screenshot = devtools.call(
                        "Page.captureScreenshot",
                        {
                            "format": "png",
                            "fromSurface": True,
                            "captureBeyondViewport": False,
                            "clip": {"x": 0, "y": 0, "width": width, "height": height, "scale": 1},
                        },
                    )
                    destination = output_dir / f"{route_name}-{viewport_name}.png"
                    destination.write_bytes(base64.b64decode(screenshot["data"]))
                    print(f"captured {destination} ({width}x{height})")
        finally:
            if devtools is not None:
                devtools.close()
            process.terminate()
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--chrome", required=True)
    parser.add_argument("--base-url", required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    arguments = parser.parse_args()
    capture_all(arguments.chrome, arguments.base_url, arguments.output_dir)
