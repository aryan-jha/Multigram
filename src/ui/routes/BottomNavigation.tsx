// import React from 'react';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { vh, vw } from '@utils/dimensions';
// import screenNames from '@utils/screenNames';
// import Favourite from '@ui/screens/favourite';
// import { Image, StyleSheet, View } from 'react-native';
// import {
//   createBottomTabNavigator
// } from '@react-navigation/bottom-tabs';
// import { COLORS } from '@utils/themes';
// import Scanner from '@ui/screens/scanner/Scanner';
// import { handleCameraPermission } from '@utils/permissions';
// import { store } from '@ui/store/store';

// const Tab = createBottomTabNavigator();
// const allTabs = [
//   {
//     id: 1,
//     name: screenNames.Home,
//     component: Home,
//     icon: bottomTabHome,
//     filledIcon: bottomTabHomeFilled,
//   },
//   {
//     id: 2,
//     name: screenNames.Search,
//     component: Search,
//     icon: bottomTabSearch,
//     filledIcon: bottomTabSearchFilled,
//   },
//   {
//     id: 3,
//     name: screenNames.Scan,
//     component: Scanner,
//     icon: scannerBT,
//     filledIcon: bottomTabHomeFilled,
//   },
//   {
//     id: 4,
//     name: screenNames.Favourite,
//     component: Favourite,
//     icon: bottomTabFavourite,
//     filledIcon: bottomTabFavFilled,
//   },
//   {
//     id: 5,
//     name: screenNames.Profile,
//     component: Profile,
//     icon: bottomTabProfile,
//     filledIcon: bottomTabProfileFilled,
//   },
// ];
// function BottomTab() {
//   const insets = useSafeAreaInsets();
//   const {token} = store.getState()?.auth.userDetail;

//   return (
//     <Tab.Navigator
//       initialRouteName={screenNames.Home}
//       screenOptions={({route}) => {
//         const tabConfig = allTabs.find(tab => tab.name === route.name);
//         const isScanScreen = tabConfig && tabConfig.id === 3;
//         return {
//           animation: 'fade',
//           tabBarStyle: isScanScreen
//             ? {display: 'none'}
//             : [bottomTabStyle.tabBar, {height: vh(78) + insets.bottom}],
//           headerShown: false,
//           headerTitle: '',
//           tabBarShowLabel: false,
//           headerShadowVisible: false,
//           tabBarHideOnKeyboard: true,
//         };
//       }}>
//       {allTabs.map(({id, name, component, icon, filledIcon}) => (
//         <Tab.Screen
//           key={name}
//           name={name}
//           component={component}
//           listeners={({navigation}) => ({
//             tabPress: async e => {
//               if (id === 3) {
//                 // Scan tab
//                 e.preventDefault(); // Stop default tab navigation
//                 const permissionResult = await handleCameraPermission();
//                 if (permissionResult.isSuccess) {
//                   navigation.navigate(screenNames.Scan);
//                 }
//               }
//               if (id === 4 && !token) {
//                 e.preventDefault();
//                 navigation.navigate(screenNames.PopupAlert);
//               }
//             },
//           })}
//           options={{
//             tabBarIcon: ({focused}) =>
//               id === 3 ? (
//                 <View style={bottomTabStyle.scanTabContainer}>
//                   <Image
//                     source={icon}
//                     resizeMode="contain"
//                     resizeMethod="auto"
//                     style={{
//                       width: vw(32),
//                       height: vw(32),
//                       tintColor: COLORS.white,
//                     }}
//                   />
//                 </View>
//               ) : (
//                 <View style={bottomTabStyle.tabIconContainer}>
//                   <Image
//                     source={focused ? filledIcon : icon}
//                     resizeMode="contain"
//                     resizeMethod="auto"
//                     style={bottomTabStyle.tabIcon}
//                   />
//                   <View
//                     style={[
//                       bottomTabStyle.tabIndicator,
//                       {
//                         backgroundColor: focused
//                           ? COLORS.slatePurple300_Base
//                           : COLORS.transparent,
//                       },
//                     ]}
//                   />
//                 </View>
//               ),
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }
// export default React.memo(BottomTab);

// const bottomTabStyle = StyleSheet.create({
//   tabBar: {
//     backgroundColor: COLORS.white,
//     borderTopLeftRadius: vw(35),
//     borderTopRightRadius: vw(35),
//     position: 'absolute',
//     paddingTop: vh(19),
//     shadowColor: COLORS.black,
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.4,
//     shadowRadius: 25.0,
//     elevation: 24,
//   },
//   scanTabContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: vw(64),
//     height: vw(64),
//     borderRadius: vw(32),
//     backgroundColor: COLORS.neonBlue500_Base,
//   },
//   scanTabIcon: {
//     width: vw(32),
//     height: vw(32),
//     tintColor: COLORS.white,
//   },
//   tabIconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tabIcon: {
//     width: vw(24),
//     height: vh(24),
//     marginTop: vh(14),
//   },
//   tabIndicator: {
//     width: vw(13),
//     height: vh(1.5),
//     borderRadius: vw(2),
//     marginTop: vh(12),
//     alignSelf: 'center',
//     marginLeft: vw(2),
//   },
// });
