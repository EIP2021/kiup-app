import React, { useState, useRef } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../themes';
import { styles, pickerStyles } from './styles/SelectInputStyle';

const SelectInput = ({
  input: { onChange },
  meta: { error, submitFailed },
  items,
  placeholder,
  showError,
  defaultValue,
  inputAndroidStyle,
  inputIOSStyle,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const [lastValue, setLastValue] = useState('');
  const ref = useRef();
  const InputAccessoryView = () => {
    return (
      <View style={styles.datePickerIOSContainer}>
        <View style={styles.datePickerIOSBorder}>
          <TouchableOpacity
            onPress={() => {
              setValue(lastValue);
              ref.current.togglePicker(true);
            }}
          >
            <Text style={styles.datePickerIOSBorderText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValue(value);
              ref.current.togglePicker(true);
            }}
          >
            <Text style={styles.datePickerIOSBorderText}>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        {...props}
        ref={ref}
        InputAccessoryView={InputAccessoryView}
        onClose={() => {
          setLastValue(value);
          onChange(value);
        }}
        style={{
          ...pickerStyles,
          inputIOS: inputIOSStyle,
          inputAndroid: inputAndroidStyle,
        }}
        onValueChange={newValue => {
          setValue(newValue);
          if (Platform.OS !== 'ios') {
            onChange(newValue);
          }
        }}
        value={value}
        useNativeAndroidPickerStyle={false}
        items={items}
        placeholder={placeholder}
        Icon={() => (
          <Icon
            name="angle-down"
            color={colors.dark_white}
            size={moderateScale(18)}
          />
        )}
      />
      {showError && submitFailed && error && (
        <Text style={styles.errorStyle}>{error}</Text>
      )}
    </View>
  );
};

SelectInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.object.isRequired,
  showError: PropTypes.bool,
  defaultValue: PropTypes.string,
  inputIOSStyle: PropTypes.object,
  inputAndroidStyle: PropTypes.object,
};

SelectInput.defaultProps = {
  input: {},
  meta: {},
  showError: false,
  defaultValue: '',
  inputIOSStyle: pickerStyles.inputIOS,
  inputAndroidStyle: pickerStyles.inputAndroid,
};

export default SelectInput;
