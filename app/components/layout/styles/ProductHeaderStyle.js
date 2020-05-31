import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: moderateScale(10),
  },
  image: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: 100,
    marginRight: moderateScale(7),
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  title: {
    color: '#2ecc71',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  brand: {
    color: 'rgb(170,170,170)',
    fontSize: moderateScale(16),
  },
  textContainer: {
    flexDirection: 'column',
    marginHorizontal: moderateScale(6),
  },
});

export default styles;
