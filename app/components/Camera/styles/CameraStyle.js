import { StyleSheet, Platform } from 'react-native';

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
    ...Platform.select({
      ios: {
        right: 10,
        top: 40,
      },
      android: {
        right: 0,
        top: 25,
      },
    }),
  },
});

export default styles;
