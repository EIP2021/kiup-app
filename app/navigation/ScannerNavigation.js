import { createStackNavigator } from 'react-navigation';

import ScannerScreen from '../containers/Scanner/ScannerScreen';
import ProductScreen from '../containers/Scanner/ProductScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const ScannerNavigation = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: {
        header: null,
      },
    },
    Product: {
      screen: ProductScreen,
      navigationOptions: {
        title: 'Produit',
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
    },
  },
  {
    initialRouteName: 'Scanner',
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default ScannerNavigation;
