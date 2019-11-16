import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(12),
    marginBottom: moderateScale(5),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  placeholder: {
    fontSize: moderateScale(15),
    color: '#86939e',
    marginLeft: moderateScale(12),
  },
  bottomBar: {
    height: 1,
    backgroundColor: '#86939e',
    marginTop: moderateScale(10),
  },
});

export default styles;
