import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { formValueSelector, reduxForm, Field } from 'redux-form';
import { withHandlers } from 'recompose';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setError } from '../../actions';
import { SliderInput, FetchButton } from '../../components';
import styles from './styles/AddRecipeTimeStyle';

const getTimeScreen = (timeScreen, setTimeScreen) => {
  const showPrep = () => {
    setTimeScreen(false);
  };
  const showCook = () => {
    setTimeScreen(true);
  };
  if (timeScreen) {
    return (
      <View>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonLeft}>
              <Button
                title="Préparation"
                onPress={showPrep}
                type="clear"
                style={styles.buttons}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonBorderUnselected}
              />
            </View>
            <View style={styles.verticalSeparator} />
            <View style={styles.buttonRight}>
              <Button
                title="Cuisson"
                type="clear"
                style={styles.buttons}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonBorderSelected}
              />
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <Field name="cookTime" component={SliderInput} />
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <View>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLeft}>
            <Button
              title="Préparation"
              type="clear"
              style={styles.buttons}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonBorderSelected}
            />
          </View>
          <View style={styles.verticalSeparator} />
          <View style={styles.buttonRight}>
            <Button
              title="Cuisson"
              onPress={showCook}
              type="clear"
              style={styles.buttons}
              titleStyle={styles.buttonTitle}
              containerStyle={styles.buttonBorderUnselected}
            />
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <Field name="prepTime" component={SliderInput} />
        </View>
      </ScrollView>
    </View>
  );
};

const AddRecipeScreen = ({ validateForm }) => {
  const [timeScreen, setTimeScreen] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%', height: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Sélectionnez les temps de préparation et de cuisson
        </Text>
        <View style={styles.lowerContainer}>
          <View>
            <View>{getTimeScreen(timeScreen, setTimeScreen)}</View>
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

const mapStateToProps = state => {
  const selector = formValueSelector('addRecipe');
  return {
    initialValues: {
      prepTime: 0,
      cookTime: 0,
    },
    values: selector(state, 'prepTime', 'cookTime'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateForm: values => {
    if (values.prepTime === 0) {
      dispatch(setError(`Veuillez sélectioner un temps de préparation`));
      return;
    }
    ownProps.navigation.navigate('AddRecipeSteps');
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
