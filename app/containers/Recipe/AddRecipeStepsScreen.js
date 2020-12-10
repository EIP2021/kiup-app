import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { formValueSelector, reduxForm, Field, FieldArray } from 'redux-form';
import { withHandlers } from 'recompose';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setError } from '../../actions';
import { BasicInput, FetchButton } from '../../components';
import styles from './styles/AddRecipeStepsStyle';
import { colors } from '../../themes';

const renderSteps = ({ fields }) => (
  <View style={{ width: '100%' }}>
    {fields.map((step, index) => (
      <View style={{ width: '100%' }} key={index}>
        <Text style={styles.stepTitle}>Étape {index + 1}</Text>
        <Field
          name={`${step}.text`}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          containerStyle={styles.stepContainer}
          component={BasicInput}
          inputContainerStyle={styles.stepInputContainerStyle}
        />
      </View>
    ))}
    <View style={styles.doubleButton}>
      <Button
        icon={<Icon name="ios-add-circle" size={30} color={colors.primary} />}
        type="clear"
        onPress={() => fields.push({})}
        color={colors.primary}
      />
      <Button
        icon={<Icon name="ios-remove-circle" size={30} color={colors.error} />}
        type="clear"
        onPress={() => fields.pop()}
        color={colors.primary}
      />
    </View>
  </View>
);

const AddRecipeScreen = ({ validateForm }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Ajoutez les étapes de votre recette</Text>
        <FieldArray name="steps" component={renderSteps} />
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

renderSteps.propTypes = {
  fields: PropTypes.object,
};

renderSteps.defaultProps = {
  fields: {},
};

const mapStateToProps = state => {
  const selector = formValueSelector('addRecipe');
  return {
    initialValues: {
      steps: [],
    },
    values: selector(state, 'steps'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateForm: values => {
    if (!values || !values.length) {
      dispatch(setError('Veuillez ajouter au moins une étape a votre recette'));
      return;
    }
    ownProps.navigation.navigate('AddRecipeRecap');
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
