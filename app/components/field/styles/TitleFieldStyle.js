import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(21),
    color: colors.primary,
    fontWeight: 'bold',
    padding: moderateScale(9),
  },
});

export default styles;
