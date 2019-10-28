import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 80,
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  icon: {
    width: 50,
    height: 50,
    left: moderateScale(15),
    top: moderateScale(15),
  },
  text: {
    fontSize: moderateScale(24),
    top: moderateScale(28),
    left: moderateScale(25),
  },
  next: { position: 'absolute', width: 30, height: 30, top: 25, right: 5 },
});

export default styles;
