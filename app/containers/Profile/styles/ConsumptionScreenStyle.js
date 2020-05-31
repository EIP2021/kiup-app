import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerRight: {
    marginRight: moderateScale(13),
  },
  rowContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: moderateScale(8),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
  },
  title: {
    marginTop: moderateScale(20),
  },
  form: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(9),
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 25,
    width: '100%',
    borderColor: 'rgb(130, 130, 130)',
    backgroundColor: 'white',
  },
  input: {
    paddingLeft: moderateScale(4),
    alignSelf: 'center',
    textAlign: 'center',
  },
  modifyButton: {
    borderRadius: 25,
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  deleteButton: {
    borderRadius: 25,
    backgroundColor: colors.secondary,
    borderColor: '#ff3232',
    borderWidth: 2,
  },
  deleteButtonTitle: {
    color: '#ff3232',
  },
  modifyButtonTitle: {
    color: colors.primary,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    width: '49%',
    marginTop: moderateScale(9),
    marginBottom: moderateScale(17),
  },
});

export default styles;
