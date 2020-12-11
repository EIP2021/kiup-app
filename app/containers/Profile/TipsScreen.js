import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles/ProfileScreenStyle';
import { Header, TitleField, ConsumptionCard } from '../../components';

const translation = {
  potassium: 'potassium',
  phosphorus: 'phosphore',
  salt: 'sel',
  proteins: 'protéines',
};

const TipsScreen = ({ navigation, nutrimentsCountAlert, productAlerts }) => {
  console.log(productAlerts);
  const nutrimentsAlert = Object.keys(nutrimentsCountAlert)
    .filter(key => nutrimentsCountAlert[key])
    .map(key => {
      return (
        <ConsumptionCard
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/1024px-OOjs_UI_icon_alert-yellow.svg.png"
          name="Consommation depassée"
          quantity={`Votre consommation de ${translation[key]} a depassé la limite autoriser`}
          key={key}
        />
      );
    });
  const productAlertsList = productAlerts.map(product => {
    return (
      <ConsumptionCard
        image={product.image}
        name={product.title}
        quantity={`Le taux de ${
          translation[product.nutriment]
        } est élever dans ce produit, surveillez votre consommation`}
        key={product.id}
      />
    );
  });
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <Header
        title="Conseils nutritionnels"
        iconName="close"
        onIconPress={() => navigation.navigate('Profile')}
      />
      <TitleField title="Suivi nutriments" />
      <View>{nutrimentsAlert}</View>
      <TitleField title="Nouveaux conseils" />
      <View>{productAlertsList}</View>
    </ScrollView>
  );
};

TipsScreen.propTypes = {
  navigation: PropTypes.object,
  nutrimentsCountAlert: PropTypes.object,
  productAlerts: PropTypes.array,
};

TipsScreen.defaultProps = {
  navigation: {},
  nutrimentsCountAlert: {},
  productAlerts: [],
};

const mapStateToProps = state => {
  return {
    nutrimentsCountAlert: state.tipsAlert.nutrimentsCountAlert,
    productAlerts: state.tipsAlert.productAlerts,
  };
};

export default connect(mapStateToProps)(TipsScreen);
