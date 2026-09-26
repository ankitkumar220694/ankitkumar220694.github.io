(() => {
  "use strict";

  const button = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");

  if (button && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", () => {
      const opening = !nav.classList.contains("open");
      nav.classList.toggle("open", opening);
      button.setAttribute("aria-expanded", String(opening));
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
