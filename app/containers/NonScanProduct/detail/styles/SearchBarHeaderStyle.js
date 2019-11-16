import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: moderateScale(9),
  },
  borderGradient: {
    height: moderateScale(4),
  },
});

export default styles;
