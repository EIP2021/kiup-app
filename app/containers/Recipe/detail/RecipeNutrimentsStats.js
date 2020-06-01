import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles/RecipeNutrimentsStatsStyle';
import { ProgressCircleField } from '../../../components';

const RecipeNutrimentsStats = ({ nutriments }) => {
  return (
    <View>
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

RecipeNutrimentsStats.propTypes = {
  nutriments: PropTypes.object,
};

RecipeNutrimentsStats.defaultProps = {
  nutriments: {},
};

const mapStateToProps = state => ({
  nutriments: state.statistics,
});

export default connect(mapStateToProps)(RecipeNutrimentsStats);
