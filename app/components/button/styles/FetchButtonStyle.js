import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%',
    backgroundColor: colors.secondary,
    height: moderateScale(35, 0.3),
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: moderateScale(16),
  },
});

export default styles;
