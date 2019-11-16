import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBarHeader from './detail/SearchBarHeader';
import { searchProduct, clearProductsResearch } from '../../actions';
import styles from './styles/SearchListScreenStyle';
import ProductList from './detail/ProductList';

const SearchListScreen = ({ navigation, clearList, search }) => {
  const placeholder = navigation.getParam('placeholder');
  const categoryId = navigation.getParam('id');
  const title = navigation.getParam('title');

  useEffect(() => {
    if (categoryId) {
      search();
    }
    return clearList;
  }, []);

  return (
    <View style={styles.container}>
      <SearchBarHeader
        onBack={navigation.goBack}
        updateSearch={search}
        placeholder={placeholder || 'Rechercher un produit'}
      />
      <ProductList title={title || 'Produits'} />
    </View>
  );
};

SearchListScreen.propTypes = {
  navigation: PropTypes.object,
  search: PropTypes.func,
  clearList: PropTypes.func,
};

SearchListScreen.defaultProps = {
  navigation: {},
  search: () => {},
  clearList: () => {},
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const categoryId = ownProps.navigation.getParam('id');
  return {
    search: (query = '') => {
      dispatch(searchProduct(categoryId, query));
    },
    clearList: () => {
      dispatch(clearProductsResearch());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchListScreen);
