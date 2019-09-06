import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import { moderateScale } from 'react-native-size-matters';

import BasicInput from './BasicInput';
import { colors } from '../../themes';

const SecureInput = forwardRef(({ iconColor, ...props }, ref) => {
  const [show, setShow] = useState(true);

  return (
    <BasicInput
      {...props}
      ref={ref}
      secureTextEntry={show}
      rightIconContainerStyle={{ marginRight: 10 }}
      rightIcon={
        <Icon
          name={show ? 'eye' : 'eye-with-line'}
          color={iconColor}
          onPress={() => setShow(!show)}
          size={moderateScale(20)}
        />
      }
    />
  );
});

SecureInput.propTypes = {
  iconColor: PropTypes.string,
};

SecureInput.defaultProps = {
  iconColor: colors.grey,
};

export default SecureInput;
