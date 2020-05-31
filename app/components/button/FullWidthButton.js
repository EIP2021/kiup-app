import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../themes';

const FullWidthButton = ({ title, color, backgroundColor, onPress }) => {
  return (
    <Button
      title={title}
      containerStyle={{
        width: '100%',
        marginBottom: moderateScale(40),
      }}
      buttonStyle={{
        height: moderateScale(45),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.separator,
        backgroundColor: backgroundColor || colors.secondary,
      }}
      titleStyle={{
        color: color || colors.primary,
        fontSize: moderateScale(13),
      }}
      onPress={() => onPress()}
    />
  );
};

FullWidthButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
};

FullWidthButton.defaultProps = {
  title: '',
  color: '',
  backgroundColor: '',
  onPress: /* istanbul ignore next */ () => {},
};

export default FullWidthButton;
