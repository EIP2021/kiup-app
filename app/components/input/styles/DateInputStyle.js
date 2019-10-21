import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    width: '85%',
  },
  textContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.dark_white,
  },
  textContainerError: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.error,
  },
  text: {
    width: '100%',
    paddingVertical: moderateScale(12),
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: colors.dark_white,
  },
  datePickerIOSContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    backgroundColor: colors.ios_grey,
  },
  datePickerIOS: {
    height: 216,
    width: 330,
  },
  datePickerIOSBorder: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.ios_white,
    height: 45,
  },
  datePickerIOSBorderText: {
    marginRight: moderateScale(10),
    color: colors.primary,
    fontSize: moderateScale(14),
    // fontWeight: 'bold',
  },
  errorStyle: {
    marginLeft: 0,
    paddingTop: 3,
    color: colors.error,
    alignSelf: 'flex-start',
    fontSize: moderateScale(11),
    textAlign: 'left',
  },
});

export default styles;
