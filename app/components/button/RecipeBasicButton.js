import React from 'react';
import { Text, ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles/RecipeBasicButtonStyle';
import { colors } from '../../themes';

const BasicButton = ({
  title,
  variant,
  onPress,
  containerStyle,
  buttonStyle,
  titleStyle,
  ...props
}) => (
  <Button
    {...props}
    title={title}
    onPress={onPress}
    loadingProps={{
      color: variant === 'primary' ? colors.primary : colors.secondary,
    }}
    containerStyle={[styles.container, containerStyle]}
    buttonStyle={[styles[`${variant}Button`], buttonStyle]}
    titleStyle={[styles[`${variant}Title`], titleStyle]}
  />
);

BasicButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  variant: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  titleStyle: Text.propTypes.style,
};

BasicButton.defaultProps = {
  title: '',
  variant: 'primary',
  onPress: /* istanbull ignore next */ () => {},
  containerStyle: {},
  buttonStyle: {},
  titleStyle: {},
};

export default BasicButton;
