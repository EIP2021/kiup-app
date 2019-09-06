import React, { useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { setError } from '../../actions';
import { BasicInput, SecureInput, FetchButton } from '../../components';
import { validateEmail, validatePasswordRegister } from '../../helpers';
import { colors } from '../../themes';
import styles from './styles/RegisterScreenStyle';

const RegisterScreen = ({ validateForm }) => {
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Créer un compte</Text>
        <Field
          name="email"
          variant="secondary"
          onSubmitEditing={() =>
            setTimeout(
              () => passwordInputRef.current.getRenderedComponent().focus(),
              150
            )
          }
          returnKeyType="next"
          selectionColor={colors.secondary}
          placeholderTextColor={colors.dark_white}
          placeholder="Entrer votre adresse email"
          component={BasicInput}
          containerStyle={styles.emailInputContainer}
          keyboardType="email-address"
          blurOnSubmit={false}
          autoFocus
        />
        <Field
          name="password"
          variant="secondary"
          onSubmitEditing={() =>
            setTimeout(
              () =>
                passwordConfirmInputRef.current.getRenderedComponent().focus(),
              150
            )
          }
          returnKeyType="next"
          selectionColor={colors.secondary}
          placeholderTextColor={colors.dark_white}
          iconColor={colors.light_grey}
          placeholder="Entrer un mot de passe"
          component={SecureInput}
          ref={passwordInputRef}
          forwardRef
          blurOnSubmit={false}
        />
        <Field
          name="passwordConfirm"
          variant="secondary"
          onSubmitEditing={validateForm}
          returnKeyType="send"
          selectionColor={colors.secondary}
          placeholderTextColor={colors.dark_white}
          iconColor={colors.light_grey}
          placeholder="Confirmer votre mot de passe"
          component={SecureInput}
          ref={passwordConfirmInputRef}
          forwardRef
          blurOnSubmit={false}
        />
        <FetchButton
          title="Continuer"
          onPress={validateForm}
          variant="primary"
          containerStyle={styles.button}
        />
      </ScrollView>
    </View>
  );
};

RegisterScreen.propTypes = {
  validateForm: PropTypes.func,
};

RegisterScreen.defaultProps = {
  validateForm: /* istanbull ignore next */ () => {},
};

const mapStateToProps = state => {
  const selector = formValueSelector('register');
  return {
    values: selector(state, 'email', 'password', 'passwordConfirm'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateForm: values => {
    const emailError = validateEmail(values.email);
    if (emailError) {
      dispatch(setError(`${emailError}, veuillez réessayer.`));
      return;
    }
    const passwordError = validatePasswordRegister(values.password);
    if (passwordError) {
      dispatch(setError(`${passwordError}`));
      return;
    }
    if (values.password !== values.passwordConfirm) {
      dispatch(setError(`Les mots de passe entrés ne correspondent pas.`));
      return;
    }
    ownProps.navigation.navigate('RegisterInformation');
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
    form: 'register',
  })
);

export default enhance(RegisterScreen);
