import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const buttonStyle = {
  borderWidth: 1,
  borderRadius: 4,
  height: moderateScale(40),
};

const titleStyle = {
  fontSize: moderateScale(13),
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
