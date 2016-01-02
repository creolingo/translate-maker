import cldr from 'cldr';
import { localeToLanguage } from './utils/getPlural';
import makePlural from 'make-plural/make-plural';
import path from 'path';

const localeIds = cldr.localeIds;
const store = __dirname + '/cldr/';

export default function prepareCLDR() {
  const locales = {};
  const MakePlural = makePlural.load(cldrData('supplemental/plurals'), cldrData('supplemental/ordinals'));

  localeIds.forEach((localeCode) => {
    const defaultNumberSystem = cldr.extractDefaultNumberSystemId(localeCode);

    const displayNames = cldr.extractLanguageDisplayNames(localeCode);
    const languageCode = (localeCode.match(/([a-zA-Z]+)/))[1];


    locales[localeCode] = {
      plural: cldr.extractPluralRuleFunction(localeCode),
      displayName: displayNames[localeCode] || displayNames[languageCode],
      dateFormats: cldr.extractDateFormats(localeCode),
      timeFormats: cldr.extractTimeFormats(localeCode),
      numberSymbols: cldr.extractNumberSymbols(localeCode, defaultNumberSystem),
    };
  });

  console.log(Object.keys(locales).length);


  Object.keys(locales).forEach((lg) => {

  });
}
