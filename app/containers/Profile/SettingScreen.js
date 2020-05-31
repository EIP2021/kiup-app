import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearData, deleteToken } from '../../actions';
import {
  Header,
  TitleField,
  NavigateInformationButton,
  FullWidthButton,
  CustomModal,
} from '../../components';
import ModifySetting from './detail/ModifySetting';
import { getEmailAddress } from '../../selectors';
import styles from './styles/SettingScreenStyle';
import PersonalInformations from './detail/PersonalInformations';
import { colors } from '../../themes';

const SettingScreen = ({ navigation, logout, email }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [information, setInformation] = React.useState({});
  const [keyboardType, setKeyboardType] = React.useState('default');
  const modifySetting = (type, value, newKeyboardType) => {
    setKeyboardType(newKeyboardType);
    setModalIsOpen(true);
    setInformation({ type, value });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header
          title="Paramètres"
          iconName="ios-close"
          iconSize={45}
          onIconPress={() => navigation.goBack()}
        />
        <TitleField
          title="Informations personnelles"
          titleStyle={styles.informationTitle}
        />
        <PersonalInformations modifySetting={modifySetting} />
        <TitleField
          title="Informations du compte"
          titleStyle={styles.accountInformationTitle}
        />
        <View style={styles.fields}>
          <NavigateInformationButton
            name="Addresse email"
            value={email}
            onPress={() => modifySetting('email', email, 'email-address')}
          />
          <NavigateInformationButton
            name="Mot de passe"
            hideValue
            lastItem
            onPress={() => modifySetting('password', 'hahaxd', 'password')}
          />
        </View>
        <FullWidthButton
          title="Se deconnecter"
          color={colors.error}
          onPress={() => logout()}
        />
      </ScrollView>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
        style={{ marginHorizontal: 15 }}
      >
        <ModifySetting
          type={information.type}
          initialValue={information.value}
          keyboardType={keyboardType}
        />
      </CustomModal>
    </View>
  );
};

SettingScreen.propTypes = {
  navigation: PropTypes.object,
  logout: PropTypes.func,
  email: PropTypes.string,
};

SettingScreen.defaultProps = {
  navigation: {},
  logout: /* istanbul ignore next */ () => {},
  email: '',
};

const mapStateToProps = state => {
  return {
    email: getEmailAddress(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(clearData('auth'));
      dispatch(clearData('consumptionHistory'));
      dispatch(deleteToken('kiup'));
      ownProps.navigation.navigate('Welcome');
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreen);
