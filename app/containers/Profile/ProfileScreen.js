import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/ProfileScreenStyle';
import { Header, TitleField } from '../../components';
import NutrimentsStats from './detail/NutrimentsStats';
import ConsumptionChartSwiper from './detail/ConsumptionChartSwiper';
import HistoryList from './detail/HistoryList';

const monthlyStats = {
  potassium: [320, 430, 210, 560, 0, 320, 730],
  phosphorus: [320, 430, 210, 560, 0, 320, 730],
  proteins: [32, 43, 21, 56, 0, 32, 73],
  salt: [3.2, 4.1, 2.8, 5.1, 0, 3.2, 7.3],
};

const ProfileScreen = ({ navigation }) => {
  const ConsumptionCharWeekly = (
    <ConsumptionChartSwiper nutrimentsStats={monthlyStats} type="weekly" />
  );

  const ConsumptionCharMonthly = (
    <ConsumptionChartSwiper nutrimentsStats={monthlyStats} type="monthly" />
  );
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <Header
        title="Profil"
        iconName="ios-settings"
        onIconPress={() => navigation.navigate('Setting')}
      />
      <TitleField title="Statistiques" titleStyle={styles.statsTitle} />
      <NutrimentsStats
        consumptionCharWeekly={ConsumptionCharWeekly}
        consumptionCharMonthly={ConsumptionCharMonthly}
      />
      <TitleField
        title="Consomations récentes"
        titleStyle={styles.consumeTitle}
      />
      <HistoryList />
    </ScrollView>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

ProfileScreen.defaultProps = {
  navigation: {},
};

export default ProfileScreen;
