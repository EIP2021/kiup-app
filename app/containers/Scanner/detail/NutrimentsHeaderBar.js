import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles/NutrimentsHeaderBarStyle';

const NutrimentsHeaderBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>Nutriments</Text>
      <Text style={styles.rightText}>valeurs pour 100g</Text>
    </View>
  );
};

export default NutrimentsHeaderBar;
