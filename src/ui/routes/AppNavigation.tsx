import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import Login from '@ui/screens/auth/login/Login';
import Splash from '@ui/screens/auth/splash/Splash';
import screenNames from '@utils/screenNames';


/**
 * @description AppNavigation is a stack navigator that contains all the screens
 *              of the app. It uses native stack navigator and all the screens
 *              are wrapped in the header shown with the custom header style.
 * @returns {React.ReactElement} NativeStackNavigator containing all the screens of the app
 */


export type AppNavigationStackParamList = {
  Splash: undefined
  Login: undefined
}

export type TNativeStackNavigationParamList =
  NativeStackNavigationProp<AppNavigationStackParamList>;

/**
 * @description Created a stack navigator for app navigations
 */
const Stack = createNativeStackNavigator<AppNavigationStackParamList>();

const noHeaderOption: NativeStackNavigationOptions = {headerShown: false};

export const AppNavigation = (
  <Stack.Navigator screenOptions={{
    headerShown: true,
    headerBackVisible: false,
    headerShadowVisible: false,
  }} >
 <Stack.Screen name={screenNames.Login} component={Splash} options={noHeaderOption} />   
<Stack.Screen name={screenNames.Splash} component={Login} options={noHeaderOption} />
  </Stack.Navigator>
)
