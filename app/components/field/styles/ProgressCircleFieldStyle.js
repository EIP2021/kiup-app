import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
  },
  title: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: 'rgb(20, 20, 20)',
    marginBottom: moderateScale(5),
  },
  circleAmount: {
    fontSize: moderateScale(11),
    textAlign: 'center',
    color: 'rgb(100, 100, 100)',
  },
});

export default styles;
