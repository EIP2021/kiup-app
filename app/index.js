import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
import NavigationService from './services/navigation';
import NavigationAppRoot from './navigation';
import { colors } from './themes';
import { ErrorMessageAlert } from './components';

const { store, persistor } = configureStore();

const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
          />
          <NavigationAppRoot
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <ErrorMessageAlert />
        </>
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
