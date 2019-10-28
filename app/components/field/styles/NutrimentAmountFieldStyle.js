import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: moderateScale(9),
    paddingVertical: moderateScale(9),
    borderColor: '#C8C8C8',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
    alignSelf: 'flex-start',
    marginHorizontal: moderateScale(8),
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
