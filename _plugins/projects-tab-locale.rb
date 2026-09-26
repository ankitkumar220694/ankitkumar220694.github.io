# frozen_string_literal: true

# Chirpy translates tab labels through its locale table. Keep the portfolio's
# user-facing route names consistent after theme locale data is loaded.
Jekyll::Hooks.register :site, :post_read do |site|
  locales = site.data['locales'] ||= {}
  english = locales['en'] ||= {}
  tabs = english['tabs'] ||= {}
  tabs['projects'] = 'Projects'
  tabs['tags'] = 'Topics'
  tabs['archives'] = 'Writing'
end
