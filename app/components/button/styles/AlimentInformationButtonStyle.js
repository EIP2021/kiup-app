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
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(70),
    height: moderateScale(70),
    alignSelf: 'flex-start',
    marginRight: moderateScale(10),
  },
  name: {
    textAlign: 'left',
    color: 'rgb(50, 50, 50)',
    fontSize: moderateScale(15),
  },
  brand: {
    textAlign: 'left',
    color: 'rgb(150, 150, 150)',
    fontSize: moderateScale(12),
  },
  date: {
    alignSelf: 'flex-end',
    textAlign: 'left',
    color: 'rgb(150, 150, 150)',
    fontSize: moderateScale(12),
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
