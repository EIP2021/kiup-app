import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FetchButton } from '../../components';
import { setError } from '../../actions';
import styles from './styles/AddRecipeRecapStyle';
import { colors } from '../../themes';

const AddRecipeScreen = ({ handleSubmit, formStates }) => {
  console.log(formStates);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Récapitulatif de votre recette</Text>
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
  connect(mapStateToProps, mapDispatchToProps),
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
