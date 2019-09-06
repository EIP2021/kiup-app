import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { BasicButton } from '../../components';
import styles from './styles/WelcomeScreenStyle';

const WelcomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur Kiup</Text>
      <View>
        <BasicButton
          title="Se connecter"
          variant="primary"
          onPress={() => navigate('Login')}
        />
        <View style={styles.align}>
          <View style={styles.bar} />
          <Text style={styles.delimiter}>ou</Text>
          <View style={styles.bar} />
        </View>
        <BasicButton
          title="Créer un compte"
          variant="primary"
          onPress={() => navigate('Register')}
        />
      </View>
    </View>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object,
};

WelcomeScreen.defaultProps = {
  navigation: {},
};

export default WelcomeScreen;
