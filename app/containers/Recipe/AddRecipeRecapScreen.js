import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { reduxForm, getFormValues } from 'redux-form';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addRecipe } from '../../requests';
import { FetchButton, ConsumptionCard } from '../../components';
import styles from './styles/AddRecipeRecapStyle';
import { images } from '../../themes';
import { TitleField } from '../../components/field';

const AddRecipeScreen = ({ handleSubmit, formStates }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <TitleField
            title="Résumé de votre nouvelle recette"
            titleStyle={styles.title}
          />
        </View>
        <View style={styles.textInputBarContainerStyle}>
          <View style={styles.textInputContainerStyle}>
            <Text style={styles.textInputStyle}>{formStates.name}</Text>
          </View>
          <View style={styles.recipeImageContainer}>
            <Image
              source={{ uri: formStates.image }}
              style={styles.recipeImage}
              resizeMode="cover"
            />
          </View>
        </View>
        <TitleField title="Ingrédients" titleStyle={styles.otherTitle} />
        {formStates.products.map(product => (
          <ConsumptionCard
            key={product.id}
            name={product.title}
            brand={product.brand}
            image={product.image}
            quantity={`${product.quantity} g`}
          />
        ))}
        <TitleField title="Étapes" titleStyle={styles.otherTitle} />
        {formStates.steps.map((item, key) => (
          <View>
            <Text style={styles.stepTitle}>Étape {key + 1}</Text>
            <View style={styles.stepInputContainerStyle}>
              <Text style={styles.stepContainer}>{item.text}</Text>
            </View>
            <Divider />
          </View>
        ))}
        <TitleField title="Temps" titleStyle={styles.otherTitle} />
        <View style={styles.timeContainer}>
          <View style={styles.timeAndLogoContainer}>
            <Image
              source={images.preparationTime}
              style={styles.preparationTimeImageContainer}
            />
            <Text style={styles.timeTextStyle}>{formStates.prepTime} min</Text>
          </View>
          <View style={styles.timeAndLogoContainer}>
            <Image
              source={images.cookingTime}
              style={styles.cookingTimeImageContainer}
            />
            <Text style={styles.timeTextStyle}>{formStates.cookTime} min</Text>
          </View>
        </View>
        <FetchButton
          title="Valider"
          type="recipe"
          onPress={handleSubmit}
          variant="secondary"
          containerStyle={styles.button}
        />
      </ScrollView>
    </View>
  );
};

AddRecipeScreen.propTypes = {
  handleSubmit: PropTypes.func,
  formStates: PropTypes.object,
};

AddRecipeScreen.defaultProps = {
  handleSubmit: /* istanbull ignore next */ () => {},
  formStates: {},
};

const mapStateToProps = state => {
  return {
    formStates: getFormValues('addRecipe')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    const payload = {
      name: values.name,
      //image: values.image,
      cookTime: values.cookTime,
      prepTime: values.prepTime,
      steps: values.steps.map((step, id) => ({ step: id, text: step.text })),
      ingredients: values.products.map((product, id) => ({
        id,
        text: product.quantity
          ? `${product.quantity}g de ${product.title}`
          : product.title,
      })),
      description: values.description,
    };
    dispatch(addRecipe(payload));
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'addRecipe',
    destroyOnUnmount: false,
  })
);

export default enhance(AddRecipeScreen);
