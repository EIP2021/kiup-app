import { createStackNavigator } from 'react-navigation';

import NonScanProductScreen from '../containers/NonScanProduct/NonScanProductScreen';
import NonScanProductListScreen from '../containers/NonScanProduct/NonScanProductListScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const NonScanProductNavigation = createStackNavigator(
  {
    NonScanProduct: {
      screen: NonScanProductScreen,
      navigationOptions: {
        title: 'Catégorie',
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
    },
    NonScanProductList: {
      screen: NonScanProductListScreen,
      navigationOptions: {
        headerStyle: {
          ...defaultNavigationOptions.headerStyle,
          borderBottomWidth: 0,
        },
      },
    },
  },
  {
    initialRouteName: 'NonScanProduct',
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  }
);

export default NonScanProductNavigation;
