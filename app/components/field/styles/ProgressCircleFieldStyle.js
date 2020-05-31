import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
  },
  title: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: colors.dark_text,
    marginBottom: moderateScale(5),
  },
  circleAmount: {
    fontSize: moderateScale(11),
    textAlign: 'center',
    color: colors.medium_text,
  },
});

export default styles;
