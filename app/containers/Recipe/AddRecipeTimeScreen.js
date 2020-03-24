import React from 'react';
import { View, Text } from 'react-native';
import { formValueSelector, reduxForm } from 'redux-form';
import { withHandlers } from 'recompose';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddRecipeScreen = ({ validateForm }) => {
  return (
    <View>
      <Text>Time</Text>
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
  const selector = formValueSelector('register');
  return {
    values: selector(state, 'prepTime', 'cookTime'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateForm: values => {
    ownProps.navigation.navigate('AddRecipeTime');
  },
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    validateForm: props => () => {
      props.validateForm(props.value);
    },
  }),
  reduxForm({
    form: 'addRecipe',
  })
);

export default enhance(AddRecipeScreen);
