import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderBottomColor: colors.very_light_grey,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    paddingBottom: 5,
  },
  text: {
    width: moderateScale(290),
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  imageContainer: {
    marginTop: 5,
    borderRadius: 5,
    width: 350,
    height: windowHeight - ((windowHeight / 100) * 77),
    backgroundColor: colors.very_light_grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  cookingContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  markData: {
    color: colors.primary,
  },
  cookingData: {
    flexDirection: 'row',
  },
});

export default styles;
