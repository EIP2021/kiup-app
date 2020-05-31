import React from 'react';
import { View, Text } from 'react-native';

import { TitleField } from '../../../components/field';
import styles from './styles/NutrimentsHeaderBarStyle';

const NutrimentsHeaderBar = () => {
  return (
    <View style={styles.container}>
      <TitleField titleStyle={styles.title} title="Nutriments" />
      <Text style={styles.rightText}>valeurs pour 100g</Text>
    </View>
  );
};

export default NutrimentsHeaderBar;
