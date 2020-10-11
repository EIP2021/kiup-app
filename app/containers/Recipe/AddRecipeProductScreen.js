import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { formValueSelector, reduxForm, FieldArray } from 'redux-form';
import { withHandlers } from 'recompose';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { calculAllNutrimentsQuantity, addAllNutrimentsQuantity } from '../../helpers';
import { FetchButton, ConsumptionCard } from '../../components';
import { TitleField } from '../../components/field';
import styles from './styles/AddRecipeProductStyle';
import { RecipeAddProductButton } from '../../components/button';
import RecipeNutrimentsStats from './detail/RecipeNutrimentsStats';

const renderProducts = ({ fields, setNutriments }) => {
  const products = fields.getAll();
  const totalNutriments = {
    potassium: 0,
    phosphorus: 0,
    salt: 0,
    proteins: 0,
  };
  if (products) {
    products.forEach(product => {
      totalNutriments.potassium += product.nutrimentsConsumed.potassium;
      totalNutriments.phosphorus += product.nutrimentsConsumed.phosphorus;
      totalNutriments.proteins += product.nutrimentsConsumed.proteins;
      totalNutriments.salt += product.nutrimentsConsumed.salt;
    });
    setNutriments(totalNutriments);
  }
  return (
    <View style={{ width: '100%' }}>
      {products &&
        products.map(product => {
          //:addNutriments(product.nutrimentsConsumed);
          return (
            <ConsumptionCard
              key={product.id}
              name={product.title}
              brand={product.brand}
              image={product.image}
              quantity={`${product.quantity} g`}
            />
          );
        })}
      <RecipeAddProductButton fields={fields} />
      {/* <View style={styles.secondContainer}>
        <View style={styles.bottomTitleInfoNutrimentsContainers}>
          <View style={styles.titleContainer}>
            <Text style={styles.textStyle}>Apports nutritionnels</Text>
          </View>
          <RecipeNutrimentsStats nutriments={totalNutriments} />
        </View>
      </View> */}
    </View>
  );
};

const AddRecipeScreen = ({ validateForm }) => {
  const [nutriments, setNutriments] = useState({
    potassium: 0,
    phosphorus: 0,
    salt: 0,
    proteins: 0,
  });

  // const addNutriments = nutrimentsConsumed => {
  //   setNutriments({
  //     potassium: nutriments.potassium + nutrimentsConsumed.potassium,
  //     phosphorus: nutriments.phosphorus + nutrimentsConsumed.phosphorus,
  //     proteins: nutriments.proteins + nutrimentsConsumed.proteins,
  //     salt: nutriments.salt + nutrimentsConsumed.salt,
  //   });
  // };
  return (
    <View style={styles.firstContainer}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TitleField
          title="Choisissez vos ingrédients"
          titleStyle={styles.titleStyle}
        />
        <View style={styles.flatListContainer}>
          <FieldArray
            name="products"
            component={renderProducts}
            rerenderOnEveryChange
            setNutriments={setNutriments}
          />
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.bottomTitleInfoNutrimentsContainers}>
            <View style={styles.titleContainer}>
              <Text style={styles.textStyle}>Apports nutritionnels</Text>
            </View>
            <RecipeNutrimentsStats nutriments={nutriments} />
          </View>
        </View>
        <FetchButton
          title="Continuer"
          type="recipe"
          onPress={validateForm}
          variant="secondary"
          containerStyle={styles.button}
        />
      </ScrollView>
    </View>
  );
};

AddRecipeScreen.propTypes = {
  validateForm: PropTypes.func,
};

AddRecipeScreen.defaultProps = {
  validateForm: /* istanbull ignore next */ () => {},
};

renderProducts.propTypes = {
  fields: PropTypes.object,
};

renderProducts.defaultProps = {
  fields: {},
};

const mapStateToProps = state => {
  const selector = formValueSelector('addRecipe');
  return {
    values: selector(state, 'products'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateForm: values => {
    // TODO
    ownProps.navigation.navigate('AddRecipeTime');
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    validateForm: props => () => {
      props.validateForm(props.values);
    },
  }),
  reduxForm({
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: false,
    form: 'addRecipe',
  })
);

export default enhance(AddRecipeScreen);
