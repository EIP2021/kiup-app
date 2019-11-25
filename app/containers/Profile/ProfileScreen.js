import React from 'react';
import { View } from 'react-native';

import styles from './styles/ProfileScreenStyle';
import { Header, TitleField } from '../../components';
import NutrimentsStats from './detail/NutrimentsStats';
import { handleStatusBar } from '../../helpers';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Profil" iconName="ios-settings" />
      <TitleField title="Statistiques" titleStyle={styles.statsTitle} />
      <NutrimentsStats />
      <TitleField
        title="Consomations récentes"
        titleStyle={styles.consumeTitle}
      />
    </View>
  );
};

export default handleStatusBar('dark-content', '#f2f2f2', false)(ProfileScreen);
