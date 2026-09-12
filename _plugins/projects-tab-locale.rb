# frozen_string_literal: true

# Chirpy translates tab titles through its locale table. Register the custom
# Projects tab after theme data is loaded so the document title is not blank.
Jekyll::Hooks.register :site, :post_read do |site|
  locales = site.data['locales'] ||= {}
  english = locales['en'] ||= {}
  tabs = english['tabs'] ||= {}
  tabs['projects'] ||= 'Projects'
end
