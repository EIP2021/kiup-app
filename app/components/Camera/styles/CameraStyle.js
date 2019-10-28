import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    top: 25,
  },
});

export default styles;
