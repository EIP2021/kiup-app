import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Header } from '../../components';
import HistoryList from './detail/HistoryList';

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Historique"
        iconName="ios-close"
        iconSize={45}
        onIconPress={() => navigation.goBack()}
      />
      <HistoryList navigation={navigation} />
    </View>
  );
};

HistoryScreen.propTypes = {
  navigation: PropTypes.object,
};

HistoryScreen.defaultProps = {
  navigation: {},
};

export default HistoryScreen;
