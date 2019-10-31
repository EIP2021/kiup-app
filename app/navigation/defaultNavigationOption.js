import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../themes';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    shadowOpacity: 0,
    elevation: 0,
    height: moderateScale(45),
  },
  title: {
    color: colors.secondary,
    fontSize: moderateScale(17),
  },
});

const defaultNavigationOptions = {
  headerStyle: styles.header,
  headerTintColor: colors.secondary,
  headerTitleStyle: styles.title,
};

export default defaultNavigationOptions;
