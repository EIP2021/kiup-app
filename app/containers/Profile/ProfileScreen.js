import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/ProfileScreenStyle';
import { Header, TitleField } from '../../components';
import NutrimentsStats from './detail/NutrimentsStats';
import HistoryList from './detail/HistoryList';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Profil"
        iconName="ios-settings"
        onIconPress={() => navigation.navigate('Setting')}
      />
      <TitleField title="Statistiques" titleStyle={styles.statsTitle} />
      <NutrimentsStats />
      <TitleField
        title="Consomations récentes"
        titleStyle={styles.consumeTitle}
      />
      <HistoryList />
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

ProfileScreen.defaultProps = {
  navigation: {},
};

export default ProfileScreen;
