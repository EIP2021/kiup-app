import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { ProgressCircleField } from '../field';
import styles from './styles/NutrimentsDiagramStyle';

const NutrimentsDiagram = ({ nutriments }) => {
  return (
    <View style={styles.rowContainer}>
      <ProgressCircleField
        title="Protéines"
        value={nutriments.proteins}
        maximum={60}
        color="#FFA339"
        unit="g"
      />
      <ProgressCircleField
        title="Sel"
        value={nutriments.salt}
        maximum={5}
        color="#3290BE"
        unit="g"
      />
      <ProgressCircleField
        title="Phosphore"
        value={nutriments.phosphorus}
        maximum={1000}
        color="#2ECC73"
        unit="mg"
      />
      <ProgressCircleField
        title="Potassium"
        value={nutriments.potassium}
        maximum={600}
        color="#FF6339"
        unit="mg"
      />
    </View>
  );
};

NutrimentsDiagram.propTypes = {
  nutriments: PropTypes.object,
};

NutrimentsDiagram.defaultProps = {
  nutriments: {},
};

export default NutrimentsDiagram;
