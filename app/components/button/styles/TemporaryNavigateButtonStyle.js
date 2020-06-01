import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: colors.primary,
    width: '75%',
    height: moderateScale(35),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
