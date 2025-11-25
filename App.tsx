import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@ui/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from '@ui/components/errorBoundary';
import ThemeInitializer from '@ui/themes/ThemeInitializer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
         <ThemeInitializer/>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
