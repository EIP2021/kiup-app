import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  inputContainer: {
    borderWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 2,
    justifyContent: 'center',
    borderColor: 'rgb(130, 130, 130)',
    height: 44,
  },
  input: {
    paddingLeft: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default styles;
