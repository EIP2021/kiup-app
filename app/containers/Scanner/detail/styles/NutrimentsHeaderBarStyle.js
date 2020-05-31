import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(16),
  },
  title: {
    paddingVertical: 0,
  },
  rightText: {
    fontSize: moderateScale(14),
    textAlign: 'right',
    color: colors.disable_text,
    marginRight: moderateScale(9),
  },
});

export default styles;
