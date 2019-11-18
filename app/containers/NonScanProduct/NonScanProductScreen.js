import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import SearchBarButton from './detail/SearchBarButton';
import styles from './styles/NonScanProductScreenStyle';
import ProductCategorieList from './detail/ProductCategorieList';

const NonScanProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBarButton placeholder="Rechercher un produit" />
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

NonScanProductScreen.propTypes = {
  navigation: PropTypes.object,
};

NonScanProductScreen.defaultProps = {
  navigation: /* istanbul ignore next */ () => {},
};

export default NonScanProductScreen;
