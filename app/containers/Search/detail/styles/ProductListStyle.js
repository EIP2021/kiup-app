import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  headerText: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(8),
    marginLeft: moderateScale(8),
    fontSize: moderateScale(17),
    color: colors.primary,
    fontWeight: 'bold',
  },
  dividerContainer: {
    backgroundColor: colors.secondary,
  },
  divider: {
    width: '89%',
    alignSelf: 'flex-end',
  },
});

export default styles;
