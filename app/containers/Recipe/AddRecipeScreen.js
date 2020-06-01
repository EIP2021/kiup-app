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
            type="addRecipe"
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
<<<<<<< HEAD
  change: PropTypes.func,
=======
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
};

AddRecipeScreen.defaultProps = {
  validateForm: /* istanbull ignore next */ () => {},
<<<<<<< HEAD
  change: /* istanbull ignore next */ () => {},
=======
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
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
    if (!values.image) {
      dispatch(setError(`Vous n'avez pas donné d'image à votre recette`));
      return;
    }
<<<<<<< HEAD
    ownProps.navigation.navigate('AddRecipeTime');
=======
    ownProps.navigation.navigate('AddRecipeProducts');
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
  },
});

const enhance = compose(
<<<<<<< HEAD
  connect(mapStateToProps, mapDispatchToProps),
=======
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
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
