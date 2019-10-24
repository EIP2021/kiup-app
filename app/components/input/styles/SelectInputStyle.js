import { StyleSheet, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

export const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: moderateScale(13),
    paddingBottom: moderateScale(13),
    borderBottomWidth: 1,
    paddingLeft: 0,
    borderColor: colors.dark_white,
    width: '100%',
    fontWeight: 'bold',
    color: colors.dark_white,
  },
  inputAndroid: {
    fontSize: moderateScale(12),
    paddingBottom: moderateScale(8),
    borderBottomWidth: 1,
    paddingLeft: 0,
    width: '100%',
    fontWeight: 'bold',
    borderColor: colors.dark_white,
    color: colors.dark_white,
  },
  headlessAndroidPicker: {
    width: '100%',
  },
  viewContainer: {
    ...Platform.select({
      ios: {
        width: '100%',
      },
      android: {
        width: '85%',
      },
    }),
    alignSelf: 'center',
    marginTop: moderateScale(15),
  },
  placeholder: {
    color: colors.dark_white,
  },
  iconContainer: {
    ...Platform.select({
      ios: {
        top: 0,
        right: 10,
      },
      android: {
        top: 15,
        right: 10,
      },
    }),
  },
});

export const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginTop: moderateScale(4),
  },
  errorStyle: {
    marginLeft: 0,
    color: colors.error,
    alignSelf: 'flex-start',
    fontSize: moderateScale(11),
    textAlign: 'left',
  },
  datePickerIOSContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.ios_grey,
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
    marginHorizontal: moderateScale(10),
    color: colors.primary,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});
