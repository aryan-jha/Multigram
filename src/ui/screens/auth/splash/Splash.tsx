import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { ColorType } from '@ui/themes/types';
import LottieView from 'lottie-react-native';
import { splashJson } from '../../../../assets';
import { vw } from '@utils/dimensions';
import screenNames from '@utils/screenNames';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '@ui/hooks/useAppTheme';

const Splash = () => {
   const COLOR = useAppTheme();
  
  const styles = getStyles(COLOR);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.ChatList);
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView source={splashJson} autoPlay loop style={styles.lottie} />
    </View>
  );
};

export default Splash;

const getStyles = (COLOR: ColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.commonBackground,
    },
    lottie: {
      width: vw(400),
      height: vw(400),
    },
  });
