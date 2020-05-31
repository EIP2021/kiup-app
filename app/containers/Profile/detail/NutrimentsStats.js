import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';

import styles from './styles/NutrimentsStatsStyle';
import { NutrimentsDiagram } from '../../../components';

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
      <NutrimentsDiagram nutriments={nutriments} />
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
