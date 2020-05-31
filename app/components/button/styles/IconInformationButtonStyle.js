import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(10),
    borderColor: '#C8C8C8',
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(40),
    height: moderateScale(40),
    alignSelf: 'flex-start',
    marginRight: moderateScale(10),
  },
  leftText: {
    textAlign: 'left',
    color: 'rgb(50, 50, 50)',
    fontSize: moderateScale(15),
  },
  rightText: {
    textAlign: 'right',
    fontSize: moderateScale(14),
    paddingRight: moderateScale(15),
    color: 'rgb(150, 150, 150)',
    alignSelf: 'center',
  },
});

export default styles;
