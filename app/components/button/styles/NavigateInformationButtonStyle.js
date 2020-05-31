import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(12),
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    textAlign: 'left',
    color: colors.dark_text,
    fontSize: moderateScale(14),
  },
  rightText: {
    textAlign: 'right',
    fontSize: moderateScale(14),
    paddingRight: moderateScale(15),
    color: colors.disable_text,
    alignSelf: 'center',
  },
});

export default styles;
