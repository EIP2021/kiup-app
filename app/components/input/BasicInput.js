import React, { forwardRef } from 'react';
import { ViewPropTypes, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';
import debounce from 'lodash.debounce';

import styles from './styles/BasicInputStyle';
import { colors } from '../../themes';

const placeholderColors = {
  primary: colors.very_light_grey,
  secondary: colors.dark_white,
};

const BasicInput = forwardRef(
  (
    {
      input: { onChange, value, ...restInput },
      meta: { error, submitFailed },
      variant,
      containerStyle,
      inputContainerStyle,
      leftIconContainerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      ...props
    },
    ref
  ) => {
    const inputContainer =
      submitFailed && error
        ? [
            styles[`${variant}InputContainer`],
            styles.errorInputContainer,
            inputContainerStyle,
          ]
        : [styles[`${variant}InputContainer`], inputContainerStyle];

    return (
      <View>
        <Input
          {...restInput}
          ref={ref}
          selectionColor="white"
          errorMessage={submitFailed && error ? error : ''}
          onChangeText={debounce(onChange, 100)}
          containerStyle={[styles.container, containerStyle]}
          inputContainerStyle={inputContainer}
          inputStyle={[styles[`${variant}Input`], inputStyle]}
          labelStyle={
            submitFailed && error
              ? [styles[`${variant}Label`], styles.labelError, labelStyle]
              : [styles[`${variant}Label`], labelStyle]
          }
          leftIconContainerStyle={[
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ]}
          errorStyle={[styles[`${variant}Error`], errorStyle]}
          autoCapitalize="none"
          placeholderTextColor={placeholderColors[variant]}
          autoCorrect={false}
          keyboardAppearance="light"
          blurOnSubmit
          {...props}
        />
      </View>
    );
  }
);

BasicInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  variant: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
  labelStyle: Text.propTypes.style,
  errorStyle: Text.propTypes.style,
};

BasicInput.defaultProps = {
  input: {},
  meta: {},
  variant: 'primary',
  containerStyle: {},
  inputContainerStyle: {},
  leftIconContainerStyle: {},
  inputStyle: {},
  labelStyle: {},
  errorStyle: {},
};

export default BasicInput;
