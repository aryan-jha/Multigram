import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

// Base dimensions for scaling (prefer using design's dimensions)
const BASE_WIDTH = 440;
const BASE_HEIGHT = 956;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const scaleSize = (size: any) => (width / BASE_WIDTH) * size;
const verticalScaleSize = (size: any) => (height / BASE_HEIGHT) * size;

export const vw = (size: any) => scaleSize(size);
export const vh = (size: any) => verticalScaleSize(size);
export default {
  vw,
  vh,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
};
