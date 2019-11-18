import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    height: moderateScale(55),
    padding: moderateScale(10),
    backgroundColor: colors.dark_white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: moderateScale(12),
    color: colors.grey,
  },
  errorTitle: {
    color: colors.error,
  },
});

export default styles;
