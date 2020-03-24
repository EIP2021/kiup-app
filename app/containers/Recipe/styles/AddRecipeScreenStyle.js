import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  title: {
    marginTop: moderateScale(15),
    marginBottom: moderateScale(30),
    width: '86%',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    marginTop: moderateScale(20),
    width: moderateScale(200),
  },
});

export default styles;
