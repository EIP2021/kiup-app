import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    marginVertical: moderateScale(5),
    marginHorizontal: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    borderRadius: 25,
    elevation: 2,
  },
  image: {
    width: moderateScale(46),
    height: moderateScale(48),
    borderRadius: 10,
  },
  rightContainer: {
    marginLeft: moderateScale(10),
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  verticalContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  primaryText: {
    fontSize: moderateScale(16),
    color: colors.dark_text,
  },
  secondaryText: {
    fontSize: moderateScale(14),
    color: colors.disable_text,
  },
});

export default styles;
