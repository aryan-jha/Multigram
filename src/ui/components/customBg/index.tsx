import {
  StyleSheet, View
} from 'react-native';
import React, { memo } from 'react';
import useAppNavigation from '@ui/hooks/useAppNavigation';
import { useBottomInset, useTopInset } from '@utils/functions';
import { isIOS } from '@ui/constants/Constants';
import { ColorType } from '@ui/themes/types';
import { useAppTheme } from '@ui/hooks/useAppTheme';

type CustomBGProps = {
  children: React.ReactNode;
  //   title?: string;
  //   titleStyle?: TextStyle;
  //   onBack?: () => void;
  //   onRightIconPress?: () => void;
  //   leftIcon?: any;
  //   rightIcon?: any;
  //   style?: ViewStyle | ViewStyle[];
  //   isCustomHeader?: boolean;
};

const CustomBG = ({
  children,
}: //   title,
//   onBack,
//   rightIcon = null,
//   onRightIconPress,
//   style = {},
//   titleStyle = {},
//   isCustomHeader = true,
CustomBGProps) => {
  const navigation = useAppNavigation();
  //   const handleBackPress = useCallback(() => {
  //     Keyboard.dismiss();
  //     if (onBack) {
  //       onBack();
  //     } else {
  //       navigation.goBack();
  //     }
  //   }, [navigation, onBack]);
  const COLOR = useAppTheme();
  const styles = getStyles(COLOR);
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: isIOS ? useBottomInset() : useBottomInset(),
          paddingTop: useTopInset(),
        },
      ]}>
      {/* {isCustomHeader && (
        <CustomHeader
          title={title || ''}
          onBack={handleBackPress}
          backIcon={leftIcon}
          rigthIcon={rightIcon}
          titleStyle={titleStyle}
          onRightIconPress={onRightIconPress}
        />
      )} */}
      {children}
    </View>
  );
};

export default memo(CustomBG);

const getStyles = (COLOR: ColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLOR.commonBackground,
    },
  });
