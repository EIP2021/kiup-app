import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(9),
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: 'rgb(130, 130, 130)',
    backgroundColor: 'white',
  },
  input: {
    paddingLeft: moderateScale(4),
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: moderateScale(9),
    marginBottom: moderateScale(17),
  },
  headerRight: {
    marginRight: moderateScale(13),
  },
});

export default styles;
