import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  statsTitle: {
    marginTop: moderateScale(16),
  },
  consumeTitle: {
    marginTop: moderateScale(30),
    paddingBottom: 0,
  },
});

export default styles;
