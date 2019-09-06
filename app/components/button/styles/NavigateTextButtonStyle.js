import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontFamily: 'Hack',
    fontSize: moderateScale(12),
    marginBottom: moderateScale(5),
  },
});

export default styles;
