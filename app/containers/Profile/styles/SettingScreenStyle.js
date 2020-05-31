import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ternary,
  },
  fields: {
    marginBottom: moderateScale(40),
    backgroundColor: colors.ternary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.separator,
  },
  informationTitle: {
    marginTop: moderateScale(15),
  },
  accountInformationTitle: {
    marginTop: moderateScale(30),
  },
});

export default styles;
