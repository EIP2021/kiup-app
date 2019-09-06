import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  doubleInputContainer: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
    marginBottom: moderateScale(25),
  },
  leftInput: {
    flex: 1,
    width: '40%',
  },
  rightInput: {
    flex: 1,
    width: '40%',
    alignItems: 'flex-end',
  },
  title: {
    marginBottom: moderateScale(15),
    width: '86%',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.secondary,
  },
  button: {
    marginTop: moderateScale(20),
    borderWidth: 1,
    borderColor: colors.secondary,
  },
});

export default styles;
