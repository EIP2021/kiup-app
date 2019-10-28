import { StyleSheet, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scrollView: {
    height: '100%',
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
