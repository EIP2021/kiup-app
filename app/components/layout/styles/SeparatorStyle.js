import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: moderateScale(8),
  },
  separatorMargin: {
    marginTop: moderateScale(6),
    marginBottom: moderateScale(9),
  },
});

export default styles;
