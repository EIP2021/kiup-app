import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const buttonStyle = {
  borderWidth: 1,
  height: moderateScale(40),
  borderRadius: moderateScale(25),
};

const titleStyle = {
  fontSize: moderateScale(17),
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: 'center',
  },
  primaryButton: {
    ...buttonStyle,
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
  },
  primaryTitle: {
    ...titleStyle,
    color: colors.primary,
  },
  secondaryButton: {
    ...buttonStyle,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  secondaryTitle: {
    ...titleStyle,
    color: colors.secondary,
  },
});

export default styles;
