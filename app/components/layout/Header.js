import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/HeaderStyle';
import { colors } from '../../themes';

const Header = ({
  title,
  iconName,
  avatarName,
  onIconPress,
  onAvatarPress,
  iconSize,
  avatarSize,
  avatarNotification,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        {avatarName !== '' && (
          <View style={{ marginRight: 10 }}>
            <Avatar
              rounded
              onPress={onAvatarPress}
              icon={{
                name: avatarName,
                type: 'material-community',
                size: avatarSize,
                color: colors.primary,
              }}
              overlayContainerStyle={{ backgroundColor: 'transparent' }}
            />
            {avatarNotification !== 0 && (
              <Badge
                status="error"
                value={avatarNotification}
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
              />
            )}
          </View>
        )}
        {iconName !== '' && (
          <Icon
            name={iconName}
            size={moderateScale(iconSize)}
            color={colors.primary}
            onPress={onIconPress}
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
  avatarName: PropTypes.string,
  onAvatarPress: PropTypes.func,
  avatarSize: PropTypes.number,
  avatarNotification: PropTypes.number,
};

Header.defaultProps = {
  title: '',
  iconName: '',
  onIconPress: /* istanbul ignore next */ () => {},
  iconSize: 28,
  avatarName: '',
  onAvatarPress: /* istanbul ignore next */ () => {},
  avatarSize: 28,
  avatarNotification: 0,
};

export default Header;
