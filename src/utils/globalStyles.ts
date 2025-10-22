import { StyleSheet } from "react-native";
import { vh, vw } from "./dimensions";
import { COLORS } from "@ui/constants/Themes";
import fonts from "./fonts";

export const globalStyle = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flex1: {
    flex: 1,
  },
  justif: {
    justifyContent: 'space-between',
  },
  alignItem: {
    alignItems: 'center',
  },
  flexGrow: {
    flexGrow: 1,
  },
  width100: {
    width: '100%',
  },
  height100: {
    height: '100%',
  },
  basicImgStyle20: {
    width: vw(20),
    height: vh(20),
  },
  basicImgStyle12: {
    width: vw(12),
    height: vh(12),
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  selectedformValue: {
    color: COLORS.BLACK,
    fontSize: vw(16),
    // lineHeight: vh(11),
    fontFamily: fonts.REGULAR,
  },
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flip180: {
    transform: [{scaleX: -1}],
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  listEmptyCompText: {
    fontSize: vw(20),
    fontFamily: fonts.REGULAR,
    color: COLORS.WHITE,
    alignSelf: 'center',
  },
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicImgStyle24: {
    width: vw(24),
    height: vh(24),
  },
  gap12: {
    gap: vw(12),
  },
  gap16: {
    gap: vw(16),
  },
  marginLeft20: {
    marginLeft: vw(20),
  },
  marginBottom30: { 
    marginBottom: vh(30),
  },

});
