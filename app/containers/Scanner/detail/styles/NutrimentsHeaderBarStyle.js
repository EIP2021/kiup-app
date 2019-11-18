import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
    padding: moderateScale(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'rgb(225, 225, 225)',
  },
  leftText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'center',
    color: colors.primary,
  },
  rightText: {
    fontSize: moderateScale(12),
    textAlign: 'right',
    alignSelf: 'center',
    color: 'rgb(120, 120, 120)',
  },
});

export default styles;
