import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { moderateScale } from 'react-native-size-matters';
import { useIsFocused, useFocusEffect } from 'react-navigation-hooks';

import styles from './styles/ProgressCircleFieldStyle';
import { getPercentage } from '../../helpers';

const circleAmount = (value, maximum, unit) => {
  return () => (
    <Text style={styles.circleAmount}>
      {Math.round(value * 100) / 100} / {maximum} {unit}
    </Text>
  );
};

const ProgressCircleField = ({ title, value, maximum, color, unit }) => {
  const didMountRef = useRef(false);
  const animatedCircularProgressRef = useRef(false);
  const isFocused = useIsFocused();

  useFocusEffect(() => {
    if (didMountRef.current) {
      if (isFocused) {
        animatedCircularProgressRef.current.reAnimate(
          0,
          getPercentage(value, maximum)
        );
      }
    } else {
      didMountRef.current = true;
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AnimatedCircularProgress
        ref={animatedCircularProgressRef}
        size={moderateScale(87)}
        width={moderateScale(9)}
        fill={getPercentage(value, maximum)}
        lineCap="round"
        rotation={360}
        tintColor={color}
        backgroundColor={`${color}4d`}
      >
        {circleAmount(value, maximum, unit)}
      </AnimatedCircularProgress>
    </View>
  );
};

ProgressCircleField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  maximum: PropTypes.number,
  color: PropTypes.string,
  unit: PropTypes.string,
};

ProgressCircleField.defaultProps = {
  title: '',
  value: 0,
  maximum: 0,
  color: '',
  unit: '',
};

export default ProgressCircleField;
