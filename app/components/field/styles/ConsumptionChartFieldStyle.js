import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    paddingVertical: 0,
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  chartContainer: {
    height: moderateScale(180),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  charColumnContainer: {
    flex: 1,
    marginLeft: moderateScale(6),
  },
  yAxis: {
    marginBottom: moderateScale(18),
  },
  xAxis: {
    marginTop: moderateScale(2),
  },
});

export default styles;
