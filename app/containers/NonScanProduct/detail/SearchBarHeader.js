import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';

import { SearchBarInput } from '../../../components';
import styles from './styles/SearchBarHeaderStyle';

const SearchBarHeader = ({ title, navigation, ...props }) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Icon
          size={moderateScale(16)}
          name="chevron-left"
          color="#2ecc71"
          onPress={() => navigation.pop()}
          style={styles.icon}
        />
        <SearchBarInput
          {...props}
          placeholder={`Rechercher un ${title.toLowerCase()}`}
        />
      </View>
      <LinearGradient
        colors={['#BBBBBB', '#F2F2F2']}
        style={styles.borderGradient}
      />
    </View>
  );
};

SearchBarHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object,
};

SearchBarHeader.defaultProps = {
  title: '',
  navigation: {},
};

export default SearchBarHeader;
