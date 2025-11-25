import {RootState} from '@ui/store/store';
import {useAppSelector} from '.';
import { ColorType } from '@ui/themes/types';

export const useAppTheme = ():ColorType => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  return theme;
};
// how to use
//  const COLORS = useAppTheme();
//   const styles = getStyles(COLORS);

// in style sheet
// const getStyles = (COLORS: ThemeType) =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: COLORS.background,
//     },
//   });
