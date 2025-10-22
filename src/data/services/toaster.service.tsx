import Color from '@ui/constants/Themes';
import {vh, vw} from '@utils/dimensions';

// import fonts from '@utils/fonts';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
const TOAST_OFFSET = 50;
export const TOAST_TYPE = {
  SUCCESSTOAST: 'success',
  ERRORTOAST: 'error',
};

export const toastConfig: any = {
  error: ({text1, text2}: any) => {
    return (
      <View style={styles.toast}>
        <View style={styles.rightRed} />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{text1}</Text>
        </View>
      </View>
    );
  },

  success: ({text1, text2}: any) => {
    return (
      <View style={styles.toast}>
        <View style={styles.rightGreen} />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{text1}</Text>
        </View>
      </View>
    );
  },
};

export const showToast = (type: string, message: string, title?: string) => {
  Toast.show({
    type: type,
    text2: title,
    text1: message,
    topOffset: TOAST_OFFSET,
    onPress: () => Toast.hide(),
  });
};

const styles = StyleSheet.create({
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.OFF_WHITE,
    height: 'auto',
    width: vw(335),
    borderRadius: vw(8),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    paddingVertical: vh(10),
    paddingHorizontal: vw(6),
  },
  textStyle: {
    fontSize: vw(14),
    // fontFamily: fonts.REGULAR,
    color: Color.DARK_TEXT,
  },
  rightRed: {backgroundColor: Color.RED, height: '100%', width: '2%'},
  rightGreen: {
    backgroundColor: Color.GREEN,
    height: '100%',
    width: '2%',
  },
});
