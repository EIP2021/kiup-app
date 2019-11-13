import React from 'react';
import { View, ScrollView } from 'react-native';

import { SearchBarInput } from '../../components/input';
import styles from './styles/NonScanProductScreenStyle';
import ProductCategorieList from './detail/ProductCategorieList';

const NonScanProductScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBarInput />
      <View style={styles.scrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            <ProductCategorieList />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NonScanProductScreen;
