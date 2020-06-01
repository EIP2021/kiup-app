import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  title: {
    marginTop: moderateScale(15),
    marginBottom: moderateScale(30),
    width: '86%',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.primary,
  },
  lowerContainer: {
    backgroundColor: colors.dark_white,
    width: '100%',
    height: verticalScale(400),
    borderRadius: moderateScale(20),
  },
  buttonContainer: {
    marginTop: moderateScale(20),
    width: '90%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonLeft: {
    width: '45%',
  },
  buttonRight: {
    width: '45%',
  },
  buttons: {
    backgroundColor: colors.dark_white,
    margin: moderateScale(9),
  },
  buttonTitle: {
    color: colors.primary,
  },
  buttonBorderSelected: {
    borderColor: colors.primary,
    borderWidth: moderateScale(1),
    backgroundColor: colors.dark_white,
    borderRadius: moderateScale(40),
  },
  buttonBorderUnselected: {
    backgroundColor: colors.dark_white,
    borderRadius: moderateScale(40),
  },
  verticalSeparator: {
    width: moderateScale(1),
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
  },
  sliderContainer: {
    marginTop: verticalScale(100),
    width: '70%',
  },
});

export default styles;
