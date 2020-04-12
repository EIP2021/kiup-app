import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SearchBarButton from './detail/SearchBarButton';
import styles from './styles/SearchScreenStyle';
// import ProductCategorieList from './detail/ProductCategorieList';

const RecipesSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBarButton
        placeholder="Rechercher un produit"
        onPress={() => navigation.navigate('SearchList')}
      />
    </View>
  );
};

RecipesSearchScreen.propTypes = {
  navigation: PropTypes.object,
};

RecipesSearchScreen.defaultProps = {
  navigation: /* istanbul ignore next */ () => {},
};

export default RecipesSearchScreen;
