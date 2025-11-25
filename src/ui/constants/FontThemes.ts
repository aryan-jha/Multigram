import {vh, vw} from '@utils/dimensions';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


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
const Themes = {SIZES, FONTS};
export default Themes;
