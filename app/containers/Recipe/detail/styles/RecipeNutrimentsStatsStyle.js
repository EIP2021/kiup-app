import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: moderateScale(10),
  },
  containerButtons: {
    borderRadius: 25,
    height: moderateScale(25),
    width: '92%',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    backgroundColor: colors.primary,
  },
  innerBorderButtons: {
    width: 0,
  },
  textButtons: {
    color: colors.secondary,
    fontSize: moderateScale(14),
  },
  buttons: {
    borderRadius: 25,
    marginVertical: moderateScale(2.8),
    marginHorizontal: moderateScale(2.5),
  },
  selectedButton: {
    backgroundColor: colors.secondary,
  },
  selectedTextButton: {
    color: colors.primary,
  },
});

export default styles;
