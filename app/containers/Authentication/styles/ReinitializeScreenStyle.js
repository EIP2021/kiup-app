import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  fieldContainer: {
    marginBottom: moderateScale(5),
  },
  title: {
    marginBottom: moderateScale(5),
    width: '86%',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.secondary,
  },
  inputContainer: {
    borderColor: colors.dark_white,
  },
  inputText: {
    color: colors.dark_white,
  },
  button: {
    marginTop: moderateScale(15),
  },
  label: {
    color: colors.dark_white,
  },
});

export default styles;
