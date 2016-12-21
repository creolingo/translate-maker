import plurals from 'make-plural';
import parseLocale from 'locale-id';

let cachePlural = null;

export default function getPlural(locale, defaultLanguage = 'en') {
  if (!cachePlural || cachePlural.locale !== locale) {
    const { language } = parseLocale(locale) || {
      language: defaultLanguage,
    };

    cachePlural = {
      locale,
      fn: plurals[language] || plurals[defaultLanguage],
    };
  }

  return cachePlural.fn;
}
