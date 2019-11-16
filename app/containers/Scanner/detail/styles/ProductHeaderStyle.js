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
    marginTop: 8,
    width: moderateScale(80),
    height: moderateScale(140),
  },
  name: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  brand: {
    fontSize: moderateScale(13),
    color: 'rgb(110, 110, 110)',
  },
  titleContainer: {
    paddingLeft: moderateScale(18),
    width: '70%',
  },
});

export default styles;
