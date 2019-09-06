import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles/AuthLoadingScreenStyle';
import { getAuth } from '../../selectors';
import { colors } from '../../themes';

const AuthLoading = ({ navigation: { navigate }, auth: { isLogged } }) => {
  useEffect(() => {
    if (isLogged) {
      navigate('App');
    } else {
      navigate('Auth');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kiup</Text>
      <ActivityIndicator size="small" color={colors.secondary} />
    </View>
  );
};

AuthLoading.propTypes = {
  navigation: PropTypes.object,
  auth: PropTypes.object,
};

AuthLoading.defaultProps = {
  navigation: {},
  auth: {},
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default connect(mapStateToProps)(AuthLoading);
