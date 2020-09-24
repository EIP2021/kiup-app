import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  ratingRecipe: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  ratingsRecipe: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  title: {
    fontSize: moderateScale(30),
    backgroundColor: colors.primary,
    color: '#FFFFFF',
  },
  ratingButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 7,
  },
});

export default styles;
