import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: moderateScale(110),
    backgroundColor: 'black',
    borderRadius: 5,
    marginHorizontal: moderateScale(5),
    marginBottom: moderateScale(10),
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    borderRadius: 5,
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
    fontWeight: 'bold',
    fontSize: moderateScale(23),
  },
});

export default styles;
