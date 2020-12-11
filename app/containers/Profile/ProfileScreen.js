import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles/ProfileScreenStyle';
import { Header, TitleField } from '../../components';
import NutrimentsStats from './detail/NutrimentsStats';
import HistoryList from './detail/HistoryList';

const ProfileScreen = ({ navigation, alertCount }) => {
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <Header
        avatarName="bell-outline"
        title="Profil"
        iconName="cog"
        avatarNotification={alertCount}
        onAvatarPress={() => navigation.navigate('Tips')}
        onIconPress={() => navigation.navigate('Setting')}
      />
      <TitleField title="Statistiques" titleStyle={styles.statsTitle} />
      <NutrimentsStats />
      <TitleField
        title="Consommations récentes"
        titleStyle={styles.consumeTitle}
      />
      <HistoryList />
    </ScrollView>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
  alertCount: PropTypes.number,
};

ProfileScreen.defaultProps = {
  navigation: {},
  alertCount: 0,
};

const mapStateToProps = state => {
  return {
    alertCount: state.tipsAlert.alertCount,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
