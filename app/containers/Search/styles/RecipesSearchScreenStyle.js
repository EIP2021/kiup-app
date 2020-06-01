import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    marginTop: 10,
=======
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
    marginLeft: 10,
    marginRight: 10,
  },
  searchBar: {
    marginBottom: 20,
    borderColor: colors.very_light_grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
  scrollContainer: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: moderateScale(5),
  },
});

export default styles;
