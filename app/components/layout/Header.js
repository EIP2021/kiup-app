import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/HeaderStyle';
import { colors } from '../../themes';

const Header = ({
  title,
  iconName,
  secondaryIconName,
  onIconPress,
  onSecondaryIconPress,
  iconSize,
  secondaryIconSize,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        {iconName !== '' && (
          <Icon
            style={{ marginRight: secondaryIconName ? 10 : 0 }}
            name={iconName}
            size={moderateScale(iconSize)}
            color={colors.primary}
            onPress={onIconPress}
          />
        )}
        {secondaryIconName !== '' && (
          <Icon
            name={secondaryIconName}
            size={moderateScale(secondaryIconSize)}
            color={colors.primary}
            onPress={onSecondaryIconPress}
          />
        )}
      </View>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.string,
  onIconPress: PropTypes.func,
  iconSize: PropTypes.number,
  secondaryIconName: PropTypes.string,
  onSecondaryIconPress: PropTypes.func,
  secondaryIconSize: PropTypes.number,
};

Header.defaultProps = {
  title: '',
  iconName: '',
  onIconPress: /* istanbul ignore next */ () => {},
  iconSize: 28,
  secondaryIconName: '',
  onSecondaryIconPress: /* istanbul ignore next */ () => {},
  secondaryIconSize: 28,
};

export default Header;
