import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ColorType} from '@ui/themes/types';
import {COLOR} from '@ui/constants/Constants';
import {vw} from '@utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import {ChatListItem} from '@data/types/chatListItemType';
import { globalStyle } from '@utils/globalStyles';
import CustomText from '@ui/components/customText';

interface ChatListCardProps {
  item: ChatListItem;
}

const ChatListCard = ({item}: ChatListCardProps) => {
  const styles = getStyles(COLOR);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{uri: item?.participants[0]?.avatar}}
        style={{width: vw(56), height: vw(56), borderRadius: vw(28)}}
        resizeMethod="auto"
        resizeMode="cover"
      />
      <View>
        <View style = {globalStyle.flexRowJustifyBetween}>
            <CustomText>{item?.name}</CustomText>
        </View>
        <View></View>

      </View>
    </View>
  );
  
};

export default memo(ChatListCard);

const getStyles = (COLOR: ColorType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: vw(13),
      paddingVertical: vw(10),
      paddingHorizontal: vw(16),
      borderWidth: 1,
    },
  });
