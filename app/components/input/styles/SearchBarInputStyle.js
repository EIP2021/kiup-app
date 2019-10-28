import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: moderateScale(0),
    borderTopWidth: moderateScale(0),
    marginTop: moderateScale(5),
  },
  input: {
    backgroundColor: 'rgb(204,204,204)',
  },
});

export default styles;
