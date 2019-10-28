import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(9),
    padding: moderateScale(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(225, 225, 225)',
  },
  leftText: {
    fontSize: moderateScale(15),
    textAlign: 'left',
    alignSelf: 'center',
    color: 'rgb(80, 80, 80)',
  },
  rightText: {
    fontSize: moderateScale(11),
    textAlign: 'right',
    alignSelf: 'center',
    color: 'rgb(120, 120, 120)',
  },
});

export default styles;
