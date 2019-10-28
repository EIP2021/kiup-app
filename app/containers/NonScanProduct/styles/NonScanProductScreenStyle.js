import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginLeft: moderateScale(17),
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default styles;
