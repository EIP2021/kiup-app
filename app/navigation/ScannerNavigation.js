import { createStackNavigator } from 'react-navigation-stack';

import ScannerScreen from '../containers/Scanner/ScannerScreen';
import ProductScreen from '../containers/Scanner/ProductScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const ScannerNavigation = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: {
        header: null,
        title: 'Scan',
      },
    },
    ProductInformation: {
      screen: ProductScreen,
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
