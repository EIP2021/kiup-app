import React, { useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {
  FetchButton,
  NavigateTextButton,
  BasicInput,
  SecureInput,
} from '../../components';
import { required, validateEmail, validatePasswordLogin } from '../../helpers';
import { login } from '../../actions';
import styles from './styles/LoginScreenStyle';

const LoginScreen = ({ handleSubmit }) => {
  const passwordRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Bon retour parmi nous !</Text>
          <Field
            name="email"
            placeholder="Entrez votre adresse email"
            label="Email"
            textContentType="username"
            validate={[required, validateEmail]}
            component={BasicInput}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() =>
              setTimeout(
                () => passwordRef.current.getRenderedComponent().focus(),
                150
              )
            }
            autoFocus
          />
          <Field
            name="password"
            placeholder="Entrez votre mot de passe"
            textContentType="password"
            label="Mot de passe"
            validate={[required, validatePasswordLogin]}
            ref={passwordRef}
            component={SecureInput}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            forwardRef
          />
          <FetchButton
            title="Se connecter"
            variant="secondary"
            containerStyle={styles.button}
            onPress={handleSubmit}
          />
          <NavigateTextButton
            text="Mot de passe oublié ?"
            screenName="Forgotten"
            textStyle={styles.bottomText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

LoginScreen.propTypes = {
  handleSubmit: PropTypes.func,
};

LoginScreen.defaultProps = {
  handleSubmit: /* istanbul ignore next */ () => {},
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => {
      dispatch(login(values));
    },
  };
};

const enhance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'login',
  })
);

export default enhance(LoginScreen);
