import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/CustomInputStyle';
import { colors } from '../../themes';

const CustomInput = ({
  placeholder,
  value,
  onChange,
  error,
  color,
  ...props
}) => {
  const [placeholderValue, setPlaceholderValue] = React.useState(placeholder);
  const primaryColor = error ? colors.error : color;
  const textColor = error ? colors.error : colors.dark_text;
  const marginError = error.length < 30 ? moderateScale(16) : moderateScale(32);
  const marginBottom = error ? marginError : moderateScale(5);
  return (
    <View
      style={[styles.container, { borderColor: primaryColor, marginBottom }]}
    >
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder={placeholderValue}
        placeholderTextColor={colors.dark_text}
        value={value}
        onChangeText={onChange}
        onFocus={() => setPlaceholderValue('')}
        {...props}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  color: PropTypes.string,
};

CustomInput.defaultProps = {
  placeholder: '',
  value: '',
  onChange: /* istanbul ignore next */ () => {},
  error: '',
  color: colors.primary,
};

export default CustomInput;
