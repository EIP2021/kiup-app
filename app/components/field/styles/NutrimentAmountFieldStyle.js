import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: moderateScale(9),
    paddingVertical: moderateScale(9.5),
    backgroundColor: colors.secondary,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
    alignSelf: 'flex-start',
    marginHorizontal: moderateScale(15),
  },
  leftText: {
    textAlign: 'left',
    color: colors.dark_text,
    fontSize: moderateScale(13),
  },
  rightText: {
    textAlign: 'right',
    fontSize: moderateScale(13),
    color: colors.disable_text,
    alignSelf: 'center',
  },
  separator: {
    width: '87.5%',
    alignSelf: 'flex-end',
    backgroundColor: colors.separator,
  },
});

export default styles;
