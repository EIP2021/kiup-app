import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  transitionContainer: {
    position: 'absolute',
    left: 0,
    bottom: -1,
    width: '100%',
    height: moderateScale(55),
  },
  container: {
    backgroundColor: colors.dark_white,
    padding: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
  },
  errorContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: moderateScale(12),
    color: colors.grey,
  },
  errorTitle: {
    color: colors.error,
  },
});

export default styles;
