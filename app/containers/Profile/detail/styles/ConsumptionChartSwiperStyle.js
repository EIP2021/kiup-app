import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  child: {
    width: width * 0.95,
    justifyContent: 'center',
  },
  bottomContainer: {
    height: moderateScale(12),
  },
  paginationDot: {
    width: height * 0.0125,
    height: height * 0.0125,
  },
});

export default styles;
