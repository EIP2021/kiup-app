import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginVertical: moderateScale(5),
  },
  button: {
    height: moderateScale(40),
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  icon: {
    marginRight: moderateScale(5),
  },
  disabled: {
    backgroundColor: colors.disable,
  },
  disabledTitle: {
    color: colors.ternary,
  },
});

export default styles;
