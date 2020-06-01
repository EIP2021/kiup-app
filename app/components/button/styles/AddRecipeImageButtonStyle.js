import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  pictureInputContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(25),
    width: moderateScale(350),
    height: moderateScale(190),
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  defaultRecipePicture: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
    borderRadius: 5,
  },
  recipePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  addPictureLogo: {
    position: 'absolute',
    width: moderateScale(90),
    height: moderateScale(90),
  },
});

export default styles;
