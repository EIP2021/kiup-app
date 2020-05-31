import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.secondary,
    padding: moderateScale(5),
  },
  diagramTitle: {
    paddingTop: moderateScale(16),
    paddingBottom: 0,
  },
  form: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(9),
  },
});

export default styles;
