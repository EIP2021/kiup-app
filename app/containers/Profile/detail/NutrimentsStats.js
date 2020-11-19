import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';

import styles from './styles/NutrimentsStatsStyle';
import { NutrimentsDiagram } from '../../../components';
import ConsumptionChartSwiper from './ConsumptionChartSwiper';

const NutrimentsStats = ({ dailyStats, weeklyStats, monthlyStats }) => {
  const [selectedId, setSelectedId] = useState(0);
  const [renderedStats, setRenderedStats] = useState(
    <NutrimentsDiagram nutriments={dailyStats} />
  );
  const buttons = ["Aujourd'hui", 'Semaine', 'Mois'];
  React.useEffect(() => {
    if (selectedId === 0) {
      setRenderedStats(<NutrimentsDiagram nutriments={dailyStats} />);
    } else if (selectedId === 1) {
      setRenderedStats(
        <ConsumptionChartSwiper nutrimentsStats={weeklyStats} type="weekly" />
      );
    } else {
      setRenderedStats(
        <ConsumptionChartSwiper nutrimentsStats={monthlyStats} type="monthly" />
      );
    }
  }, [selectedId, dailyStats, weeklyStats, monthlyStats]);

  return (
    <View style={styles.container}>
      <ButtonGroup
        onPress={setSelectedId}
        buttons={buttons}
        selectedIndex={selectedId}
        containerStyle={styles.containerButtons}
        innerBorderStyle={styles.innerBorderButtons}
        textStyle={styles.textButtons}
        buttonStyle={styles.buttons}
        selectedButtonStyle={styles.selectedButton}
        selectedTextStyle={styles.selectedTextButton}
      />
      {[renderedStats]}
    </View>
  );
};

NutrimentsStats.propTypes = {
  dailyStats: PropTypes.object,
  weeklyStats: PropTypes.object,
  monthlyStats: PropTypes.object,
};

NutrimentsStats.defaultProps = {
  dailyStats: {},
  weeklyStats: {},
  monthlyStats: {},
};

const mapStateToProps = state => ({
  dailyStats: state.dailyStatistics,
  weeklyStats: state.weeklyStatistics,
  monthlyStats: state.monthlyStatistics,
});

export default connect(mapStateToProps)(NutrimentsStats);
