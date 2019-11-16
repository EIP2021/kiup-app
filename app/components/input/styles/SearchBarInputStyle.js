import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    height: moderateScale(45),
    width: '97%',
  },
  inputContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: moderateScale(1),
  },
  input: {
    fontSize: moderateScale(15),
    color: 'black',
  },
});

export default styles;
