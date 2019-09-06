import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import { reinitializePassword, setError } from '../../actions';
import { BasicInput, FetchButton } from '../../components';
import { validateEmail } from '../../helpers';
import styles from './styles/ForgottenScreenStyle';

const ForgottenScreen = ({ handleSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réinitialisation</Text>
      <Field
        name="email"
        variant="secondary"
        placeholder="Entrer votre adresse email"
        component={BasicInput}
        inputStyle={styles.input}
        containerStyle={styles.fieldContainer}
        keyboardType="email-address"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        blurOnSubmit={false}
        autoFocus
      />
      <FetchButton
        title="Réinitialiser"
        onPress={handleSubmit}
        containerStyle={styles.button}
      />
    </View>
  );
};

ForgottenScreen.propTypes = {
  handleSubmit: PropTypes.func,
};

ForgottenScreen.defaultProps = {
  handleSubmit: /* istanbull ignore next */ () => {},
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    const emailError = validateEmail(values.email);
    if (emailError) {
      dispatch(setError(`${emailError}, veuillez réessayer.`));
      throw new SubmissionError({
        _error: emailError,
      });
    }
    dispatch(reinitializePassword(values));
  },
});

const enhance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'forgotten',
  })
);

export default enhance(ForgottenScreen);
