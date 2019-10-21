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
    fontWeight: 'bold',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(15),
    textAlign: 'center',
    fontSize: moderateScale(18, 0.2),
    color: colors.primary,
  },
  formContainer: {
    width: '90%',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(40),
    backgroundColor: colors.secondary,
    alignItems: 'center',
    borderRadius: 5,
  },
  button: {
    marginTop: moderateScale(25),
    marginBottom: moderateScale(15),
  },
  fontStyle: {
    fontWeight: '400',
  },
  bottomText: {
    marginBottom: moderateScale(15),
  },
});

export default styles;
