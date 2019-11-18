import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(16),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingBottom: moderateScale(8),
    backgroundColor: colors.secondary,
  },
  image: {
    borderRadius: 100,
    width: moderateScale(50),
    height: moderateScale(50),
  },
  name: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: colors.primary,
  },
  brand: {
    fontSize: moderateScale(13),
    color: 'rgb(110, 110, 110)',
  },
  titleContainer: {
    paddingLeft: moderateScale(14),
    width: '70%',
  },
});

export default styles;
