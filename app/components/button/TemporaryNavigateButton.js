import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { moderateScale } from 'react-native-size-matters';
import styles from './styles/TemporaryNavigateButtonStyle';
import NavigationService from '../../services/navigation';

const TemporaryNavigateButton = ({ screenName, text }) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={moderateScale(70)}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => {
            NavigationService.navigate(screenName);
          }}
        >
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

TemporaryNavigateButton.propTypes = {
  screenName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TemporaryNavigateButton;
