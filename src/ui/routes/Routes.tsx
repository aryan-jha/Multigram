import React from 'react';
import {AppNavigation} from './AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

/**
 * @description App Screen navigations container
 * @function Routes
 * @returns JSX
 */
export const Routes = () => {
  return <NavigationContainer>{AppNavigation}</NavigationContainer>;
};
