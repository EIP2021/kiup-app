import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(9),
  },
  title: {
    fontSize: moderateScale(30),
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;
