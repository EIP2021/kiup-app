import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '#C8C8C8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(13),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  text: {
    fontSize: moderateScale(13),
    marginLeft: moderateScale(12),
  },
});

export default styles;
