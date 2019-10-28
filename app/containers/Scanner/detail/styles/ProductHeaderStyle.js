import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: moderateScale(8),
    marginBottom: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(140),
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  brand: {
    fontSize: moderateScale(13),
    color: 'rgb(110, 110, 110)',
  },
});

export default styles;
