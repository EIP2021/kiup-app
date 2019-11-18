import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: moderateScale(9),
    paddingVertical: moderateScale(9.5),
    borderColor: '#C8C8C8',
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
    alignSelf: 'flex-start',
    marginHorizontal: moderateScale(15),
  },
  leftText: {
    textAlign: 'left',
    fontSize: moderateScale(13),
  },
  rightText: {
    textAlign: 'right',
    fontSize: moderateScale(13),
    color: 'rgb(150, 150, 150)',
    alignSelf: 'center',
  },
});

export default styles;
