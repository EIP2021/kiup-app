import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  TitleField,
  CustomInput,
  DateInput,
  SelectInput,
} from '../../../components';
import { validateEmail, validatePasswordRegister } from '../../../helpers';
import RowDoubleButton from './RowDoubleButton';
import styles from './styles/ModifySettingStyle';
import { updateProfileInformation } from '../../../requests';

const translatedTittle = {
  firstName: 'Prénom',
  lastName: 'Nom',
  birthdate: 'Date de naissance',
  gender: 'Genre',
  weight: 'Poids',
  email: 'Addresse email',
  password: 'Mot de passe',
};

const choseInput = (type, value, initialValue, setValue, keyboardType) => {
  if (type === 'gender') {
    return (
      <SelectInput
        input={{ onChange: setValue }}
        meta={{ error: '', submitFailed: false }}
        defaultValue={initialValue === 'Homme' ? 'male' : 'female'}
        items={[
          { label: 'Homme', value: 'male' },
          { label: 'Femme', value: 'female' },
        ]}
        placeholder={{
          label: 'Indiquez votre genre',
          color: '#9EA0A4',
        }}
        inputAndroidStyle={styles.selectInputAndroid}
        inputIOSStyle={styles.selectInputIOS}
      />
    );
  }
  if (type === 'birthdate') {
    return (
      <DateInput
        input={{ onChange: setValue }}
        meta={{ error: '', submitFailed: false }}
        value={value}
        textContainerStyle={styles.dateTextContainer}
        textStyle={styles.dateText}
        placeholder={initialValue}
        onChange={setValue}
      />
    );
  }
  return (
    <CustomInput
      value={value}
      placeholder={initialValue}
      onChange={setValue}
      keyboardType={keyboardType}
    />
  );
};

const ModifySetting = ({
  type,
  initialValue,
  keyboardType,
  modify,
  cancel,
}) => {
  const [value, setValue] = React.useState('');

  const RenderedInput = choseInput(
    type,
    value,
    initialValue,
    setValue,
    keyboardType
  );
  return (
    <View style={styles.container}>
      <TitleField title={translatedTittle[type]} titleStyle={styles.title} />
      <View style={styles.formContainer}>
        {RenderedInput}
        <RowDoubleButton
          leftButtonProps={{ title: 'Annuler', onPress: cancel }}
          rightButtonProps={{
            title: 'Modifier',
            onPress: () => modify(type, value),
          }}
        />
      </View>
    </View>
  );
};

ModifySetting.propTypes = {
  type: PropTypes.string,
  initialValue: PropTypes.string,
  keyboardType: PropTypes.string,
  modify: PropTypes.func,
  cancel: PropTypes.func,
};

ModifySetting.defaultProps = {
  type: '',
  initialValue: '',
  keyboardType: 'default',
  modify: /* istanbul ignore next */ () => {},
  cancel: /* istanbul ignore next */ () => {},
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { closeModal } = ownProps;
  return {
    modify: (type, value, initialValue) => {
      if (value === initialValue) {
        closeModal();
        return;
      }
      if (type === 'email') {
        const error = validateEmail(value);
        return;
      }
      if (type === 'password') {
        const error = validatePasswordRegister(value);
        return;
      }
      console.log(type, value);
      dispatch(
        updateProfileInformation({
          info: { [type === 'birthdate' ? 'dateOfBirth' : type]: value },
        })
      );
      closeModal();
    },
    cancel: () => {
      closeModal();
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ModifySetting);
