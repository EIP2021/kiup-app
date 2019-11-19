import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/HeaderStyle';
import { colors } from '../../themes';

const Header = ({ title, iconName, onIconPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {iconName !== '' && (
        <Icon
          name={iconName}
          size={moderateScale(28)}
          color={colors.primary}
          onPress={onIconPress}
        />
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.string,
  onIconPress: PropTypes.func,
};

Header.defaultProps = {
  title: '',
  iconName: '',
  onIconPress: /* istanbul ignore next */ () => {},
};

export default Header;
