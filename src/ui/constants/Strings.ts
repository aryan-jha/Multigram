import Localize from '../localize';
import LocalizedStrings from 'react-native-localization';

/**
 * Strings is an instance of LocalizedStrings, which is a utility for managing
 * localized strings. It provides a convenient way to switch between different
 * languages.
 *
 * @example
 * Strings.setLanguage('ar');
 * Strings.welcome; // "مرحبا"
 *
 * @type {LocalizedStrings}
 */

let Strings = new LocalizedStrings({
  en: Localize.en,
  ar: Localize.ar,
  default: Localize.en,
});

export default Strings;
