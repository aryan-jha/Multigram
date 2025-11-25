import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {THEMES, ThemeType} from '@ui/themes';
import {Appearance} from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
  theme: ThemeType;
}

const getSystemTheme = (): ThemeType =>
  Appearance.getColorScheme() === 'dark' ? THEMES.dark : THEMES.light;

const initialState: ThemeState = {
  mode: 'system',
  theme: getSystemTheme(),
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      if (action.payload === 'system') {
        state.theme = getSystemTheme();
      } else {
        state.theme = THEMES[action.payload];
      }
      AsyncStorage.setItem('APP_THEME', action.payload);
    },
    syncSystemTheme(state, action: PayloadAction<'light' | 'dark'>) {
      if (state.mode === 'system') {
        state.theme = action.payload === 'dark' ? THEMES.dark : THEMES.light;
      }
    },
    loadThemeFromStorage(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      if (action.payload === 'system') {
        state.theme = getSystemTheme();
      } else {
        state.theme = THEMES[action.payload];
      }
    },
  },
});

export const {setMode, syncSystemTheme, loadThemeFromStorage} =
  themeSlice.actions;
export default themeSlice.reducer;
