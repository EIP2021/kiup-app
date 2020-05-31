import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(5),
    height: moderateScale(40),
    flexDirection: 'row',
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    width: '48.5%',
  },
  inputContainer: {
    width: '75%',
    justifyContent: 'center',
  },
  input: {
    fontSize: moderateScale(15),
    textAlign: 'center',
    color: colors.error,
    paddingVertical: 0,
    textAlignVertical: 'center',
  },
  unitContainer: {
    width: '25%',
    borderColor: colors.primary,
    borderLeftWidth: 2,
    justifyContent: 'center',
  },
  unit: {
    fontSize: moderateScale(15),
    textAlign: 'center',
    color: colors.disable_text,
  },
});

export default styles;
