import plurals from 'make-plural/plurals';
import keys from 'lodash/object/keys';
import localeResolver from 'locale';

const supported = new localeResolver.Locales(keys(plurals));

let cachePlural = null;

export function localeToLanguage(locale, defaultValue) {
  const language = (new localeResolver.Locales(locale)).best(supported).toString();

  return language || defaultValue;
}

export default function getPlural(locale, defaultLanguage = 'en') {
  if (!cachePlural || cachePlural.locale !== locale) {
    const language = localeToLanguage(locale, defaultLanguage);

    cachePlural = {
      locale,
      fn: plurals[language],
    };
  }

  return cachePlural.fn;
}
