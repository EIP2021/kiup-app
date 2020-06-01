import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  titleStyle: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    marginLeft: moderateScale(10),
    fontSize: moderateScale(26),
  },
  bottomTitleInfoNutrimentsContainers: {
    top: moderateScale(10),
  },
  titleContainer: {
    left: moderateScale(10),
  },
  nextbuttonContainers: {
    bottom: moderateScale(10),
  },
  button: {
    marginTop: moderateScale(20),
    width: moderateScale(200),
  },
});

export default styles;
