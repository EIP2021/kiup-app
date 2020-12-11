import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    height: '80%',
  },
  title: {
    color: colors.primary,
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.primary,
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginLeft: moderateScale(10),
  },
  recipeTitle: {
    flex: 1,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  containerRecipe: {
    backgroundColor: '#FFFFFF',
    marginLeft: moderateScale(10),
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'transparent',
  },
  containerList: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    height: '52%',
  },
  timeRecipe: {
    color: '#FFFFFF',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
  ratingRecipe: {
    color: '#FFFFFF',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  ratingContainer: {
    textAlign: 'right',
  },
  buttonText: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    flexDirection: 'row',
    color: '#FFFFFF',
  },
  iconLeft2: {
    opacity: 3,
    fontWeight: 'bold',
    fontSize: moderateScale(10),
  },
  iconLeft: {
    opacity: 3,
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
  },
  bottomButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
  },
  button: {
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    marginRight: '30%',
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    marginTop: '5%',
    borderRadius: 15,
  },
  buttonMenu: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderRadius: 30,
    borderWidth: 5,
    width: '15%',
    bottom: '-20%',
    right: 35,
    marginRight: '1%',
    position: 'absolute',
  },
});

export default styles;
