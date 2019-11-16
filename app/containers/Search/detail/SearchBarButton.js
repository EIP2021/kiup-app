import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles/SearchBarButton';

const SearchBarButton = ({ placeholder, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.rowContainer}>
          <Icon name="search" size={moderateScale(20)} color="#86939e" />
          <Text style={styles.placeholder}>{placeholder}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.bottomBar} />
    </View>
  );
};

SearchBarButton.propTypes = {
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
};

SearchBarButton.defaultProps = {
  placeholder: '',
  onPress: /* istanbul ignore next */ () => {},
};

export default SearchBarButton;
