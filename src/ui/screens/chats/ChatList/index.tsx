import { Button, View } from 'react-native';
import React from 'react';
import CustomBg from '@ui/components/customBg';
import { setMode } from '@ui/slices/auth/theme/themeSlice';
import { useAppDispatch } from '@ui/hooks';

const ChatList = () => {
  const dispatch = useAppDispatch();
  // const renderItem = useCallback(
  //   ({item, index}: {item: any; index: number}) => {
  //     const memoizedItem = useMemo(() => item, [item]);
  //     return <ChatListCard item={item} />;
  //   },
  //   [],
  // );

  return (
    <CustomBg>
      <View
        style={{
          flex: 1,
        }}>
        {/* <LegendList data={chatListData} renderItem={renderItem} /> */}
        <Button
        onPress={()=>{
          // dispatch(setMode('dark'));
          // dispatch(setMode('light'));
        }}
        title="Test Button"
        />
        <Button
        onPress={()=>{
          // dispatch(setMode('dark'));
          // dispatch(setMode('light'));
        }}
        title="Test dark"
        />
      </View>
    </CustomBg>
  );
};

export default ChatList;
