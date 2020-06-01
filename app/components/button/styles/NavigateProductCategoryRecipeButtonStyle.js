import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: moderateScale(150),
    height: moderateScale(150),
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#2ECC71',
    borderRadius: 25,
    marginHorizontal: moderateScale(13),
    marginBottom: moderateScale(20),
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    bottom: moderateScale(6),
    width: '50%',
    height: '50%',
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    top: moderateScale(95),
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: moderateScale(16),
  },
});

export default styles;
