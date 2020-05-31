import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginVertical: moderateScale(5),
    height: moderateScale(40),
    borderWidth: 2,
    borderRadius: 5,
  },
  input: {
    padding: 0,
    paddingLeft: moderateScale(5),
    textAlignVertical: 'center',
    borderRadius: 5,
    fontSize: moderateScale(14),
    color: colors.dark_text,
    height: '100%',
    backgroundColor: colors.ternary,
  },
  error: {
    marginVertical: moderateScale(3),
    fontSize: moderateScale(12),
    color: colors.error,
  },
});

export default styles;
