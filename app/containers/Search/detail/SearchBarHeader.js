import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';

import { SearchBarInput } from '../../../components';
import styles from './styles/SearchBarHeaderStyle';
import { colors } from '../../../themes';

const SearchBarHeader = ({ placeholder, onBack, ...props }) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Icon
          size={moderateScale(16)}
          name="chevron-left"
          color={colors.primary}
          onPress={() => onBack()}
          style={styles.icon}
        />
        <SearchBarInput {...props} placeholder={placeholder} />
      </View>
      <LinearGradient
        colors={['#BBBBBB', '#F2F2F2']}
        style={styles.borderGradient}
      />
    </View>
  );
};

SearchBarHeader.propTypes = {
  placeholder: PropTypes.string,
  onBack: PropTypes.func,
};

SearchBarHeader.defaultProps = {
  placeholder: '',
  onBack: /* istanbul ignore next */ () => {},
};

export default SearchBarHeader;
