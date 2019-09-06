import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  title: {
    marginBottom: moderateScale(15),
    width: '86%',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.secondary,
  },
  emailInputContainer: {
    marginBottom: moderateScale(15),
  },
  inputContainer: {
    borderColor: colors.dark_white,
  },
  inputText: {
    color: colors.dark_white,
  },
  button: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(40),
  },
  label: {
    color: colors.dark_white,
  },
});

export default styles;
