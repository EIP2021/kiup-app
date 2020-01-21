import React, { useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import { setError } from '../../actions';
import { modifyPassword } from '../../requests';
import { SecureInput, FetchButton } from '../../components';
import { validatePasswordRegister } from '../../helpers';
import styles from './styles/ReinitializeScreenStyle';

const ReinitializeScreen = ({ handleSubmit }) => {
  const passwordConfirmRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Nouveau mot de passe</Text>
        <Field
          name="password"
          textContentType="newPassword"
          selectionColor="white"
          variant="secondary"
          placeholder="Entrer un nouveau mot de passe"
          component={SecureInput}
          returnKeyType="next"
          onSubmitEditing={() =>
            setTimeout(
              () => passwordConfirmRef.current.getRenderedComponent().focus(),
              150
            )
          }
          blurOnSubmit={false}
          autoFocus
        />
        <Field
          name="passwordConfirm"
          variant="secondary"
          placeholder="Confirmer votre nouveau mot de passe"
          component={SecureInput}
          containerStyle={styles.fieldContainer}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          ref={passwordConfirmRef}
          forwardRef
          blurOnSubmit={false}
        />
        <FetchButton
          type="auth"
          title="Réinitialiser"
          onPress={handleSubmit}
          containerStyle={styles.button}
        />
      </ScrollView>
    </View>
  );
};

ReinitializeScreen.propTypes = {
  handleSubmit: PropTypes.func,
};

ReinitializeScreen.defaultProps = {
  handleSubmit: /* istanbull ignore next */ () => {},
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    const passwordError = validatePasswordRegister(values.password);
    if (passwordError) {
      dispatch(setError(`${passwordError}`));
      throw new SubmissionError({
        _error: 'invalid password',
      });
    }
    if (values.password !== values.passwordConfirm) {
      dispatch(setError(`Les mots de passe entrés ne correspondent pas.`));
      throw new SubmissionError({
        _error: 'invalid password',
      });
    }
    dispatch(modifyPassword(values));
  },
});

const enhance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'reinitialize',
  })
);

export default enhance(ReinitializeScreen);
