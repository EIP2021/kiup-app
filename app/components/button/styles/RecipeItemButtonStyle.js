import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    height: 200,
    position: 'relative',
    borderBottomColor: colors.very_light_grey,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  imageContainer: {
    height: 130,
    backgroundColor: colors.very_light_grey,
  },
  bottomContainer: {},
  cookingContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  markData: {
    color: colors.primary,
  },
  cookingData: {
    color: colors.grey,
  },
});

export default styles;
