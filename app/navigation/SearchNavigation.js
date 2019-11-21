import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from 'react-native';

import SearchScreen from '../containers/Search/SearchScreen';
import SearchListScreen from '../containers/Search/SearchListScreen';
import { colors } from '../themes';

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0,
    backgroundColor: colors.secondary,
    shadowOpacity: 0,
    elevation: 0,
    height: 0,
  },
});

const SearchNavigation = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    SearchList: {
      screen: SearchListScreen,
    },
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      headerStyle: styles.header,
      headerLeft: null,
    },
  }
);

export default SearchNavigation;
