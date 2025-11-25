import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from '@ui/routes/Routes';
import InternetService from '@ui/components/internetService';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@data/services/toaster.service';
import { loadThemeFromStorage, syncSystemTheme } from '@ui/slices/auth/theme/themeSlice';
import { useAppDispatch } from '@ui/hooks';

const ThemeInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const savedMode = (await AsyncStorage.getItem('APP_THEME')) as any;
      if (savedMode) dispatch(loadThemeFromStorage(savedMode));
    })();

    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(syncSystemTheme(colorScheme === 'dark' ? 'dark' : 'light'));
    });

    return () => listener.remove();
  }, [dispatch]);

  return (
    <>
      <Routes />
      <InternetService />
      <Toast config={toastConfig} />
    </>
  );
};

export default ThemeInitializer;
