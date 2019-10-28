import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: moderateScale(110),
    backgroundColor: 'black',
    borderRadius: moderateScale(10),
    margin: moderateScale(5),
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: moderateScale(23),
  },
});

export default styles;
