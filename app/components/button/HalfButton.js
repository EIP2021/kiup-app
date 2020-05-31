import React from 'react';

import CustomButton from './CustomButton';

const HalfButton = ({ ...props }) => {
  return <CustomButton containerStyle={{ width: '48.5%' }} {...props} />;
};

export default HalfButton;
