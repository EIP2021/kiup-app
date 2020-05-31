import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPendingStatus } from '../../selectors';
import { CustomModal } from '../../components';
import SearchBarHeader from './detail/SearchBarHeader';
import { clearData, searchProduct } from '../../actions';
import { isObjectEmpty } from '../../helpers';
import styles from './styles/SearchListScreenStyle';
import ProductList from './detail/ProductList';
import ProductDetails from '../Scanner/detail/ProductDetails';

const SearchListScreen = ({
  navigation,
  clearList,
  search,
  alimentSearched,
  pending,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (pending === false && isObjectEmpty(alimentSearched) === false) {
      setIsModalOpen(true);
    }
  }, [pending]);
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
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backdropOpacity={0}
      >
        <ProductDetails {...alimentSearched} />
      </CustomModal>
    </View>
  );
};

SearchListScreen.propTypes = {
  navigation: PropTypes.object,
  search: PropTypes.func,
  clearList: PropTypes.func,
  alimentSearched: PropTypes.object,
  pending: PropTypes.bool,
};

SearchListScreen.defaultProps = {
  navigation: {},
  search: () => {},
  clearList: () => {},
  alimentSearched: {},
  pending: false,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const categoryId = ownProps.navigation.getParam('id');
  return {
    search: query => {
      dispatch(searchProduct(categoryId, query));
    },
    clearList: () => {
      dispatch(clearData('searchProduct'));
      dispatch(clearData('alimentSearched'));
    },
  };
};
const mapStateToProps = state => {
  return {
    alimentSearched: state.alimentSearched,
    pending: getPendingStatus(state, 'alimentSearched'),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchListScreen);
