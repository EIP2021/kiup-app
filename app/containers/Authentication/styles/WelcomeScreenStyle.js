import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
  },
  welcome: {
    fontSize: moderateScale(32),
    color: colors.secondary,
    textAlign: 'center',
  },
  delimiter: {
    fontSize: moderateScale(18),
    color: colors.secondary,
    paddingBottom: 5,
  },
  align: {
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    height: moderateScale(6),
    width: '42%',
    backgroundColor: colors.secondary,
  },
});

export default styles;
