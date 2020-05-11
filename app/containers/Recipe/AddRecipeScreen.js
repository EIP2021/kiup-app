import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { AddRecipeImageButton } from '../../components/button';
import { BasicInput, FetchButton } from '../../components';
import styles from './styles/AddRecipeScreenStyle';
import { setError } from '../../actions';

const AddRecipeScreen = ({ validateForm }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Commencez par ajouter un nom et une photo
        </Text>
        <Field
          name="name"
          variant="primary"
          placeholder="Nom de la recette"
          component={BasicInput}
        />
        <Field name="image" component={AddRecipeImageButton} />
        <View style={styles.nextButtonContainers}>
          <FetchButton
            title="Continuer"
            type="recipe"
            onPress={validateForm}
            variant="secondary"
            containerStyle={styles.button}
          />
        </View>
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

const mapStateToProps = state => {
  const selector = formValueSelector('addRecipe');
  return {
    values: selector(state, 'name', 'image'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateForm: values => {
    if (!values.name) {
      dispatch(setError(`Vous n'avez pas donné de nom à votre recette`));
      return;
    }
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
    form: 'addRecipe',
  })
);

export default enhance(AddRecipeScreen);
