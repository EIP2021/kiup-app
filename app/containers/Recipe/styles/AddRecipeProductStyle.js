import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  firstContainer: {
    height: '100%',
  },
  secondContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#E6E6E6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  textStyle: {
    fontSize: moderateScale(16),
    color: colors.primary,
    fontWeight: 'bold',
  },
  flatListContainer: {
    width: '100%',
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
});

export default styles;
