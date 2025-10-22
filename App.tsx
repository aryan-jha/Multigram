import React from 'react';
import {Provider} from 'react-redux';
import {Routes} from '@ui/routes/Routes';
import Toast from 'react-native-toast-message';
import {persistor, store} from '@ui/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import ErrorBoundary from '@ui/components/errorBoundary';
import InternetService from '@ui/components/internetService';
import { toastConfig } from '@data/services/toaster.service';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <Routes />
          <InternetService />
          <Toast config={toastConfig} />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
