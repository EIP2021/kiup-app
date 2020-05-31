import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import CustomButton from './CustomButton';

const RoundedHalfButton = ({ ...props }) => {
  return (
    <CustomButton
      containerStyle={{
        width: '48.5%',
        borderRadius: 25,
      }}
      buttonStyle={{ borderRadius: 25, height: moderateScale(35) }}
      {...props}
    />
  );
};

export default RoundedHalfButton;
