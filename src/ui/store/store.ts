import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSlice } from '@ui/slices/auth/authSlice';
/**
 * @description Defined the redux persist config
 */
const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage: AsyncStorage,
};

/**
 * @description Created a root reducer that combines the all required reducers
 */
const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

/**
 * @description Defined the redux persist config
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  // ...options
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
