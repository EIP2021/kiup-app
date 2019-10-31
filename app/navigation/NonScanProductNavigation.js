import { createStackNavigator } from 'react-navigation-stack';

import NonScanProductScreen from '../containers/NonScanProduct/NonScanProductScreen';
import NonScanProductListScreen from '../containers/NonScanProduct/NonScanProductListScreen';
import defaultNavigationOptions from './defaultNavigationOption';

const NonScanProductNavigation = createStackNavigator(
  {
    NonScanProduct: {
      screen: NonScanProductScreen,
      navigationOptions: {
        title: 'Catégorie',
      },
    },
    NonScanProductList: {
      screen: NonScanProductListScreen,
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
