import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    marginLeft: moderateScale(10),
    fontSize: moderateScale(26),
  },
  button: {
    marginTop: moderateScale(20),
    width: moderateScale(200),
  },
  textInputBarContainerStyle: {
    flex: 1,
    marginTop: moderateScale(25),
    alignItems: 'center',
  },
  textInputContainerStyle: {
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: moderateScale(40),
    width: moderateScale(350),
  },
  textInputStyle: {
    flex: 1,
    height: moderateScale(40),
    width: moderateScale(330),
    fontSize: moderateScale(18),
    marginTop: moderateScale(8),
  },
  otherTitle: {
    marginTop: moderateScale(100),
    marginBottom: moderateScale(20),
    marginLeft: moderateScale(10),
    fontSize: moderateScale(26),
  },
  stepTitle: {
    color: colors.primary,
    fontSize: moderateScale(15),
    marginTop: moderateScale(15),
    marginLeft: moderateScale(10),
  },
  stepContainer: {
    marginTop: moderateScale(10),
    width: '100%',
    paddingHorizontal: 0,
  },
  stepInputContainerStyle: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingBottom: moderateScale(10),
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  preparationTimeImageContainer: {
    width: moderateScale(69),
    height: moderateScale(67),
  },
  cookingTimeImageContainer: {
    width: moderateScale(55),
    height: moderateScale(69),
  },
  timeAndLogoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;
