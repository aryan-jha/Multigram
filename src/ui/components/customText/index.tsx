import {StyleSheet, Text, TextStyle, TextProps, StyleProp} from 'react-native';
import React, {memo, PropsWithChildren} from 'react';
import { ColorType } from '@ui/themes/types';
import { COLOR } from '@ui/constants/Constants';

interface CustomTextProps extends TextProps {
  style?: TextStyle | TextStyle[] | StyleProp<TextStyle>;
  children: React.ReactNode;
}

const CustomText = ({
  style,
  children,
  ...rest
}: PropsWithChildren<CustomTextProps>) => {
    const styles = getStyles(COLOR);
  return (
    <Text
      style={[styles.defaultTextStyle, style]}
      {...rest}
      suppressHighlighting={true}>
      {children}
    </Text>
  );
};

export default memo(CustomText);

const getStyles =(COLORS:ColorType)=> StyleSheet.create({
  defaultTextStyle: {
    color: COLORS.bistre800_Title,
  },
});
