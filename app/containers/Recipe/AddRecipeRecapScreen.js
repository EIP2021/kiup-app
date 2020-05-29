import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FetchButton } from '../../components';
import { setError } from '../../actions';
import styles from './styles/AddRecipeRecapStyle';
import { colors, images } from '../../themes';
import { handleRequest } from '../../sagas/requestHandler';
import { TitleField } from '../../components/field';
import { AddRecipeImageButton } from '../../components/button';

const AddRecipeScreen = ({ handleSubmit, formStates }) => {
  console.log(formStates);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <TitleField
            title="Résumé de votre nouvelle recette"
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
            <Text>{formStates.prepTime} min</Text>
          </View>
          <View style={styles.timeAndLogoContainer}>
            <Image
              source={images.cookingTime}
              style={styles.cookingTimeImageContainer}
            />
            <Text>{formStates.cookTime} min</Text>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: values => {
    console.log(values);
  },
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    validateForm: props => () => {
      props.validateForm(props.values);
    },
  }),
  reduxForm({
    form: 'addRecipe',
    destroyOnUnmount: false,
  })
);

export default enhance(AddRecipeScreen);
