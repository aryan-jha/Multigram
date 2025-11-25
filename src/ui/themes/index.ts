import light from './light';
import dark from './dark';

export const THEMES = { light, dark };
export type ThemeType = typeof light | typeof dark;