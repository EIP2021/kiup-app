import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import SearchBarButton from './detail/SearchBarButton';
import styles from './styles/SearchScreenStyle';
import ProductCategorieList from './detail/ProductCategorieList';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBarButton
        placeholder="Rechercher un produit"
        onPress={() => navigation.navigate('SearchList')}
      />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProductCategorieList />
      </ScrollView>
    </View>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.object,
};

SearchScreen.defaultProps = {
  navigation: /* istanbul ignore next */ () => {},
};

export default SearchScreen;
