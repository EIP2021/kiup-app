import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles/AuthLoadingScreenStyle';
import { getConsumption } from '../../requests';
import { getAuth } from '../../selectors';
import { colors } from '../../themes';

const AuthLoading = ({
  navigation: { navigate },
  auth: { isLogged },
  getStatistics,
}) => {
  useEffect(() => {
    if (isLogged) {
      navigate('App');
      getStatistics();
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
  getStatistics: PropTypes.func,
};

AuthLoading.defaultProps = {
  navigation: {},
  auth: {},
  getStatistics: /* istanbul ignore next */ () => {},
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = dispatch => ({
  getStatistics: () => {
    dispatch(getConsumption());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading);
