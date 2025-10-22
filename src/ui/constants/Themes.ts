import {vh, vw} from '@utils/dimensions';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Error Shades
  error: 'rgba(246, 86, 93, 1)',
  error80: 'rgba(246, 86, 93, 0.8)',
  error60: 'rgba(246, 86, 93, 0.6)',
  error20: 'rgba(246, 86, 93, 0.2)',
  error08: 'rgba(246, 86, 93, 0.08)',

  //Primary Shades

  //Secondary Shades

  //Black Shades
  BLACK: 'rgba(0, 0, 0, 1)',
  BLACK10: 'rgba(0, 0, 0, 0.1)',
  BLACK20: 'rgba(0, 0, 0, 0.2)',
  BLACK30: 'rgba(0, 0, 0, 0.3)',
  BLACK40: 'rgba(0, 0, 0, 0.4)',
  BLACK50: 'rgba(0, 0, 0, 0.5)',
  BLACK60: 'rgba(0, 0, 0, 0.6)',
  BLACK70: 'rgba(0, 0, 0, 0.7)',
  BLACK80: 'rgba(0, 0, 0, 0.8)',
  BLACK90: 'rgba(0, 0, 0, 0.9)',

  //White Shades
  WHITE: 'rgba(255, 255, 255, 1)',
  WHITE10: '#ffffff10',
  WHITE20: '#ffffff20',
  WHITE30: '#ffffff30',
  WHITE40: '#ffffff40',
  WHITE50: '#ffffff50',
  WHITE60: '#ffffff60',
  WHITE70: '#ffffff70',
  WHITE80: '#ffffff80',
  WHITE90: '#ffffff90',

  //Gray Shades
  GREY: '#DDDDE2',
  GREY10: 'rgba(222, 222, 227, 0.1)',
  GREY20: 'rgba(222, 222, 227, 0.2)',
  GREY30: 'rgba(222, 222, 227, 0.3)',
  GREY40: 'rgba(222, 222, 227, 0.4)',
  GREY50: 'rgba(222, 222, 227, 0.5)',
  GREY60: 'rgba(222, 222, 227, 0.6)',
  GREY70: 'rgba(222, 222, 227, 0.7)',
  GREY80: 'rgba(222, 222, 227, 0.8)',
  GREY90: 'rgba(222, 222, 227, 0.9)',

  BLUE : '#007AFF',
};

export const SIZES = {
  // global sizes
  base: vw(8),
  font: vw(14),
  radius: vw(12),
  padding: vw(24),
  margin: vw(20),

  // font sizes
  largeTitle: vw(40),
  h1: vw(30),
  h2: vw(22),
  h3: vw(16),
  h4: vw(14),
  h5: vw(12),
  body1: vw(30),
  body2: vw(22),
  body3: vw(16),
  body4: vw(14),
  body5: vw(12),



  // app dimensions
  width,
  height,
};
export const FONTS = {
  // use your custom fonts here like this:-
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: vh(36)},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: vh(30)},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: vh(22)},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: vh(22)},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: vh(22)},
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: vh(36),
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: vh(30),
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: vh(22),
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: vh(22),
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: vh(22),
  },
};
export const darkTheme = {
  // use your dark theme colors here like this:-
  // backgroundColor: COLORS.darkBackground,
};
export const lightTheme = {
  // use your light theme colors here like this:-
  // backgroundColor: COLORS.white,
};
const Themes = {COLORS, SIZES, FONTS};
export default Themes;
