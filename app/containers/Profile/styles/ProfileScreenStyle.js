import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  statsTitle: {
    marginTop: moderateScale(16),
  },
  consumeTitle: {
    marginTop: moderateScale(30),
  },
});

export default styles;
