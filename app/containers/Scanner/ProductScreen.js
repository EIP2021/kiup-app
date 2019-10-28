import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Field, reduxForm } from 'redux-form';

import { BasicButton, BasicInput } from '../../components';
import { setError, consumeProduct } from '../../actions';
import styles from './styles/ProductScreenStyle';
import NutrimentsInfo from './detail/NutrimentsInfo';
import ProductHeader from './detail/ProductHeader';

const ProductScreen = ({ image, name, brand, nutriments, handleSubmit }) => {
  return (
    <ScrollView style={styles.container}>
      <ProductHeader image={image} name={name} brand={brand} />
      {Object.entries(nutriments).length !== 0 && (
        <>
          <NutrimentsInfo nutriments={nutriments} />
          <View style={styles.form}>
            <Field
              name="quantity"
              placeholder="Entrez la quantitée en gramme"
              returnKeyType="send"
              keyboardType="numeric"
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              component={BasicInput}
              placeholderTextColor="rgb(130, 130, 130)"
            />
            <BasicButton
              onPress={handleSubmit}
              title="Consommer"
              variant="secondary"
              containerStyle={{ marginTop: 10, marginBottom: 20 }}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

ProductScreen.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  nutriments: PropTypes.object,
  handleSubmit: PropTypes.func,
};

ProductScreen.defaultProps = {
  image: '',
  name: '',
  brand: '',
  nutriments: {},
  handleSubmit: () => {},
};

const mapStateToProps = state => {
  return {
    ...state.scanner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => {
      if (!values.quantity) {
        dispatch(setError('Veuillez entrer une quantitée.'));
        return;
      }
      dispatch(consumeProduct(values.quantity));
    },
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'login',
  })
);

export default enhance(ProductScreen);
