import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';

import styles from './styles/ProductListStyle';
import { loadMoreProducts } from '../../../actions';
import { NavigateIconButton } from '../../../components/button';

const ProductList = ({ title, productList, loadMore }) => {
  return (
    <FlatList
      data={productList}
      renderItem={({ item }) => (
        <NavigateIconButton title={item.name} image="noPhoto" />
      )}
      ListHeaderComponent={() =>
        productList.length ? (
          <Text style={styles.headerText}>{title}</Text>
        ) : null
      }
      ItemSeparatorComponent={() => (
        <View style={styles.dividerContainer}>
          <Divider style={styles.divider} />
        </View>
      )}
      keyExtractor={item => item.alim_code.toString()}
      initialNumToRender={15}
      onEndReachedThreshold={0.35}
      maxRenderPerBatch={25}
      onEndReached={loadMore}
    />
  );
};

ProductList.propTypes = {
  title: PropTypes.string,
  productList: PropTypes.array,
  loadMore: PropTypes.func,
};

ProductList.defaultProps = {
  title: '',
  productList: [],
  loadMore: /* istanbul ignore next */ () => {},
};

const mapStateToProps = state => ({
  productList: state.researchProduct.products,
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => {
    dispatch(loadMoreProducts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
