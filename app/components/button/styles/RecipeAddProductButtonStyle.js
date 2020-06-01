import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(14),
    borderBottomWidth: 1,
    borderBottomColor: colors.disable_text,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  text: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(16),
    color: colors.primary,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flex: 1,
    backgroundColor: '#00000075',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
