import { StyleSheet, Platform, Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: '#f2f2f2',
  },
  noDataContainer: {
    position: 'relative',
    top: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: moderateScale(26),
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default styles;
