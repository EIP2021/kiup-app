import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Slider } from 'react-native-elements';

import { colors } from '../../themes';

const SliderInput = ({ input: { value, onChange } }) => {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Slider
        value={value}
        onValueChange={newValue => onChange(newValue)}
        thumbTintColor={colors.primary}
        maximumValue={180}
        step={5}
      />
      <View style={{ alignItems: 'center' }}>
        {(value !== 0 && Math.floor(value / 60) !== 0 && (
          <Text>
            {Math.floor(value / 60)} heure {Math.floor(value % 60)} minutes
          </Text>
        )) ||
          (value !== 0 && !Math.floor(value / 60) !== 0 && (
            <Text>{Math.floor(value % 60)} minutes</Text>
          ))}
      </View>
    </View>
  );
};

SliderInput.propTypes = {
  input: PropTypes.object,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

SliderInput.defaultProps = {
  input: {},
  value: 0,
  onChange: /* istanbull ignore next */ () => {},
};

export default SliderInput;
