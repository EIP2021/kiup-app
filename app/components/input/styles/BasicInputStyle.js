import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const inputContainer = {
  alignSelf: 'flex-start',
  height: moderateScale(40),
  borderBottomWidth: 1,
};

const label = {
  fontWeight: 'normal',
  fontSize: moderateScale(14),
};

const input = {
  fontSize: moderateScale(13),
  fontStyle: 'normal',
  textAlign: 'left',
  paddingLeft: 0,
};

const error = {
  marginLeft: 0,
  color: colors.error,
  alignSelf: 'flex-start',
  fontSize: moderateScale(11),
  fontFamily: 'Hack',
  textAlign: 'left',
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    width: '85%',
    paddingHorizontal: 0,
  },
  primaryInput: {
    ...input,
    fontWeight: '400',
    color: colors.grey,
  },
  primaryInputContainer: {
    ...inputContainer,
    borderColor: colors.light_grey,
  },
  primaryLabel: {
    ...label,
    color: colors.dark_grey,
  },
  secondaryInput: {
    ...input,
    fontWeight: 'bold',
    color: colors.dark_white,
  },
  secondaryInputContainer: {
    ...inputContainer,
    borderColor: colors.dark_white,
  },
  secondaryLabel: {
    ...label,
    fontWeight: 'bold',
    color: colors.dark_white,
  },
  primaryError: {
    ...error,
    fontWeight: '400',
  },
  secondaryError: {
    ...error,
    fontWeight: 'bold',
  },
  errorInputContainer: {
    borderColor: colors.error,
  },
  labelError: {
    color: colors.error,
  },
  leftIconContainerStyle: {
    marginLeft: 0,
  },
});

export default styles;
