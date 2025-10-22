import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {I18nManager, Platform} from 'react-native';

/**
 * This file contains all the constants used in the application
 */
export const HIT_SLOP_10 = {top: 10, right: 10, bottom: 10, left: 10};
export const HIT_SLOP_VERTICAL_10 = {top: 10, right: 0, bottom: 10, left: 0};
export const HIT_SLOP_0 = {top: 0, right: 0, bottom: 0, left: 0};
export const HIT_SLOP_12 = {top: 12, right: 12, bottom: 12, left: 12};
export const HIT_SLOP_20 = {top: 20, right: 20, bottom: 20, left: 20};

export const DAYS_CONSTANT = 'days';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT_MDY = 'MM-DD-YYYY';

export const isRTL = I18nManager.isRTL;

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isWeb = Platform.OS === 'web';

export const modalBottomSheet: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'slide_from_bottom',
  headerShown: false,
};

export const KEYBOARDTYPE = {
  urlType: 'url',
  default: 'default',
  phonePad: 'phone-pad',
  numericType: 'numeric',
  numberType: 'number-pad',
  decimalType: 'decimal-pad',
  emailType: 'email-address',
};
