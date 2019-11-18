import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
import NavigationService from './services/navigation';
import NavigationAppRoot from './navigation';
import { colors } from './themes';
import { ErrorModal } from './components';

const { store, persistor } = configureStore();

const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
          />
          <NavigationAppRoot
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <ErrorModal />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
