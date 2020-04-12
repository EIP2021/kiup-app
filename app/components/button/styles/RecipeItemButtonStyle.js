import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  bottomContainer: {
    position: 'relative',
    bottom: 0
  },
  markData: {
    color: 'green',
  },
  cookingData: {
    color: 'grey',
  },
});

export default styles;
