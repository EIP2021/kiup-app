import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles/AuthLoadingScreenStyle';
import {
  getConsumption,
  getProfileInformations,
  getBestRecipes,
  getRecommendedRecipes,
} from '../../requests';
import { getAuth } from '../../selectors';
import { colors } from '../../themes';

const AuthLoading = ({
  navigation: { navigate },
  auth: { isLogged },
  initiateApp,
}) => {
  useEffect(() => {
    if (isLogged) {
      navigate('App');
      initiateApp();
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
  initiateApp: PropTypes.func,
};

AuthLoading.defaultProps = {
  navigation: {},
  auth: {},
  initiateApp: /* istanbul ignore next */ () => {},
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

const mapDispatchToProps = dispatch => ({
  initiateApp: () => {
    dispatch(getConsumption('dailyStatistics', 'day'));
    dispatch(getConsumption('weeklyStatistics', 'week'));
    dispatch(getConsumption('monthlyStatistics', 'month'));
    dispatch(getProfileInformations());
    dispatch(getRecommendedRecipes());
    dispatch(getBestRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
