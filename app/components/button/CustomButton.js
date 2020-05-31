import React from 'react';
import { ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/CustomButtonStyle';
import { colors } from '../../themes';

const CustomButton = ({
  title,
  primaryColour,
  secondaryColour,
  iconName,
  onPress,
  disabled,
  containerStyle,
  buttonStyle,
}) => {
  const RenderedIcon = !iconName ? (
    false
  ) : (
    <Icon
      name={iconName}
      color={disabled ? colors.ternary : secondaryColour}
      size={moderateScale(22)}
      style={styles.icon}
    />
  );
  return (
    <Button
      title={title}
      containerStyle={[styles.container, containerStyle]}
      buttonStyle={[
        styles.button,
        { backgroundColor: primaryColour },
        buttonStyle,
      ]}
      titleStyle={[styles.title, { color: secondaryColour }]}
      disabledStyle={styles.disabled}
      disabledTitleStyle={styles.disabledTitle}
      onPress={onPress}
      disabled={disabled}
      icon={RenderedIcon}
    />
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  primaryColour: PropTypes.string,
  secondaryColour: PropTypes.string,
  iconName: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
};

CustomButton.defaultProps = {
  title: '',
  primaryColour: colors.primary,
  secondaryColour: colors.secondary,
  iconName: '',
  onPress: /* istanbul ignore next */ () => {},
  disabled: false,
  containerStyle: {},
  buttonStyle: {},
};

export default CustomButton;
