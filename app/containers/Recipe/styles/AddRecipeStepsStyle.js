import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  title: {
    marginTop: moderateScale(15),
    marginBottom: moderateScale(30),
    width: '86%',
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.primary,
  },
  stepTitle: {
    color: colors.primary,
    fontSize: moderateScale(15),
    marginTop: moderateScale(5),
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
  },
  doubleButton: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
