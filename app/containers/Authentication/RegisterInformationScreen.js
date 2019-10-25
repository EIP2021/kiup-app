import React, { useRef } from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { moderateScale } from 'react-native-size-matters';

import { register, setError } from '../../actions';
import {
  BasicInput,
  FetchButton,
  SelectInput,
  DateInput,
} from '../../components';
import { colors } from '../../themes';
import styles from './styles/RegisterInformationScreenStyle';

const RegisterScreen = ({ handleSubmit }) => {
  const lastNameRef = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Informations complémentaires</Text>
        <View style={styles.doubleInputContainer}>
          <View style={styles.leftInput}>
            <Field
              name="name"
              returnKeyType="next"
              variant="secondary"
              placeholder="Prenom"
              component={BasicInput}
              onSubmitEditing={() =>
                setTimeout(
                  () => lastNameRef.current.getRenderedComponent().focus(),
                  150
                )
              }
              autoFocus
            />
          </View>
          <View style={styles.rightInput}>
            <Field
              name="last_name"
              ref={lastNameRef}
              variant="secondary"
              placeholder="Nom"
              component={BasicInput}
              forwardRef
            />
          </View>
        </View>
        <Field
          name="birthdate"
          component={DateInput}
          placeholder="Indiquez votre date de naissance"
        />
        <Field
          name="sexe"
          items={[
            { label: 'Homme', value: 'Homme' },
            { label: 'Femme', value: 'Femme' },
          ]}
          placeholder={{
            label: 'Indiquez votre sexe',
            value: '',
            color: '#9EA0A4',
          }}
          component={SelectInput}
        />
        <Field
          name="weight"
          variant="secondary"
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'send'}
          iconColor={colors.light_grey}
          placeholder="Entrez votre poids (kg)"
          keyboardType="numeric"
          onSubmitEditing={handleSubmit}
          component={BasicInput}
          blurOnSubmit={false}
        />
        <FetchButton
          title="Créer un compte"
          onPress={handleSubmit}
          variant="primary"
          containerStyle={{ marginVertical: moderateScale(15) }}
        />
      </ScrollView>
    </View>
  );
};

RegisterScreen.propTypes = {
  handleSubmit: PropTypes.func,
};

RegisterScreen.defaultProps = {
  handleSubmit: /* istanbull ignore next */ () => {},
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    if (
      !values.name ||
      !values.last_name ||
      !values.birthdate ||
      !values.sexe ||
      !values.weight
    ) {
      dispatch(setError('Veuillez remplir toutes les informations demandées.'));
      throw new SubmissionError({
        _error: 'Empty field',
      });
    }

    dispatch(register(values));
  },
});

const enhance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'register',
    destroyOnUnmount: false,
  })
);

export default enhance(RegisterScreen);
