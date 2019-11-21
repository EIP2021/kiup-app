import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    justifyContent: 'center',
    height: moderateScale(45),
    width: '97%',
  },
  inputContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 0,
    fontSize: moderateScale(15),
    color: 'black',
  },
});

export default styles;
