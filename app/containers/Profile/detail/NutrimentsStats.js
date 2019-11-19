import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';

import styles from './styles/NutrimentsStatsStyle';
import { ProgressCircleField } from '../../../components';

const NutrimentsStats = ({ nutriments }) => {
  const [selectedId, setSelectedId] = useState(0);
  const buttons = ["Aujourd'hui", 'Semaine', 'Mois'];
  // const values = ['day', 'week', 'month'];

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
      <View style={styles.rowContainer}>
        <ProgressCircleField
          title="Protéines"
          value={nutriments.proteins}
          maximum={60}
          color="#FFE178"
          unit="g"
        />
        <ProgressCircleField
          title="Sel"
          value={nutriments.salt}
          maximum={5}
          color="#EFA2F5"
          unit="g"
        />
        <ProgressCircleField
          title="Phosphore"
          value={nutriments.phosphorus}
          maximum={1000}
          color="#99FF99"
          unit="mg"
        />
        <ProgressCircleField
          title="Potassium"
          value={nutriments.potassium}
          maximum={600}
          color="#EF5C5C"
          unit="mg"
        />
      </View>
    </View>
  );
};

NutrimentsStats.propTypes = {
  nutriments: PropTypes.object,
};

NutrimentsStats.defaultProps = {
  nutriments: {},
};

const mapStateToProps = state => ({
  nutriments: state.statistics,
});

export default connect(mapStateToProps)(NutrimentsStats);
