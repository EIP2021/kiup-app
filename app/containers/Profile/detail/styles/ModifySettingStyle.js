import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    justifyContent: 'center',
    paddingVertical: moderateScale(6),
  },
  formContainer: {
    alignItems: 'center',
  },
  title: {
    paddingTop: 0,
    paddingLeft: moderateScale(24),
  },
  dateTextContainer: {
    marginVertical: moderateScale(5),
    height: moderateScale(40),
    borderColor: colors.primary,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: colors.ternary,
  },
  dateText: {
    borderRadius: 5,
    height: '100%',
    textAlignVertical: 'center',
    backgroundColor: colors.ternary,
    paddingVertical: 0,
    paddingLeft: moderateScale(5),
    fontSize: moderateScale(14),
    fontWeight: 'normal',
    color: colors.dark_text,
  },
  selectInputAndroid: {
    marginVertical: moderateScale(5),
    fontSize: moderateScale(14),
    paddingBottom: moderateScale(8),
    paddingLeft: moderateScale(7),
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: colors.ternary,
    width: '100%',
    borderColor: colors.primary,
    color: colors.dark_text,
    height: moderateScale(40),
  },
  selectInputIOS: {
    marginVertical: moderateScale(5),
    fontSize: moderateScale(14),
    paddingBottom: moderateScale(13),
    paddingLeft: moderateScale(7),
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: colors.ternary,
    width: '100%',
    borderColor: colors.primary,
    color: colors.dark_text,
    height: moderateScale(40),
  },
});

export default styles;
