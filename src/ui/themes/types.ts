import { ThemeType } from '.';
import light from './light';

export interface ColorType extends Record<string, string> {

  primary: string;
  secondary: string;
  messageColor: string;
  commonBackground: string;
  commonText: string;
  // add other color properties as needed
}
