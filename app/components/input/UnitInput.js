import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/UnitInputStyle';
import { colors } from '../../themes';

const UnitInput = ({ value, onChange, placeholder, unit, error }) => {
  const borderColor = error ? colors.error : colors.primary;
  const textColor = error ? colors.error : colors.dark_text;

  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={[styles.input, { color: textColor }]}
          placeholder={placeholder}
          placeholderTextColor={colors.dark_text}
          keyboardType="numeric"
        />
      </View>
      <View style={[styles.unitContainer, { borderColor }]}>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
};

UnitInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  unit: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
};

UnitInput.defaultProps = {
  value: '0',
  onChange: /* istanbul ignore next */ () => {},
  unit: '',
  placeholder: '',
  error: false,
};

export default UnitInput;
