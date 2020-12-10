import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Field, reduxForm } from 'redux-form';

import {
  BasicButton,
  BasicInput,
  HeaderWithImage,
  FavoriteButton,
} from '../../components';
import { calculAllNutrimentsQuantity } from '../../helpers';
import { setError, updateData, CREATE_DATA } from '../../actions';
import { postConsumption } from '../../requests';
import styles from './styles/ProductScreenStyle';
import NutrimentsInfo from './detail/NutrimentsInfo';

const ProductScreen = ({ navigation, handleSubmit }) => {
  const nutriments = navigation.getParam('nutriments');
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      {Object.entries(nutriments).length !== 0 && (
        <>
          <NutrimentsInfo nutriments={nutriments} />
          <View style={styles.form}>
            <Field
              name="quantity"
              placeholder="Entrez la quantité en gramme"
              returnKeyType="send"
              keyboardType="numeric"
              onSubmitEditingEditing={handleSubmit}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              component={BasicInput}
              placeholderTextColor="rgb(130, 130, 130)"
            />
            <BasicButton
              onPress={handleSubmit}
              title="Consommer"
              variant="secondary"
              containerStyle={styles.button}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

ProductScreen.propTypes = {
  navigation: PropTypes.object,
  handleSubmit: PropTypes.func,
};

ProductScreen.defaultProps = {
  navigation: {},
  handleSubmit: () => {},
};

ProductScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  const image = navigation.getParam('image');
  return {
    headerTitle: <HeaderWithImage image={image} title={title} />,
    headerRight: <FavoriteButton iconStyle={styles.headerRight} />,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      const { navigation } = ownProps;
      if (!values.quantity) {
        dispatch(setError('Veuillez entrer une quantitée.'));
        return;
      }
      const stats = calculAllNutrimentsQuantity(
        values.quantity,
        navigation.getParam('nutriments')
      );
      console.log('STATs', stats);
      const history = {
        id: navigation.getParam('id'),
        title: navigation.getParam('title'),
        image: navigation.getParam('image'),
        brand: navigation.getParam('brand'),
        date: new Date(),
        nutriments: navigation.getParam('nutriments'),
        nutrimentsConsumed: stats,
        quantity: values.quantity,
      };
      dispatch(updateData('consumptionHistory', history, CREATE_DATA));
      dispatch(postConsumption(stats));
    },
  };
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'product',
  })
);

export default enhance(ProductScreen);
