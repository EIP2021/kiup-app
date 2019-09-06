import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/NavigateTextButtonStyle';
import NavigationService from '../../services/navigation';

const NavigateTextButton = ({ text, screenName, textStyle }) => {
  return (
    <Text
      style={[styles.text, textStyle]}
      onPress={() => NavigationService.navigate(screenName)}
    >
      {text}
    </Text>
  );
};

NavigateTextButton.propTypes = {
  text: PropTypes.string,
  screenName: PropTypes.string,
  textStyle: Text.propTypes.style,
};

NavigateTextButton.defaultProps = {
  text: '',
  screenName: '',
  textStyle: {},
};

export default NavigateTextButton;
