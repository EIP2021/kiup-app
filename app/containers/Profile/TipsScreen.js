import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/ProfileScreenStyle';
import {
  Header,
  TitleField,
  ConsumptionCard,
  CustomModal,
} from '../../components';

const TipsScreen = ({ navigation }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <>
      <ScrollView nestedScrollEnabled style={styles.container}>
        <Header
          title="Conseils nutritionnels"
          iconName="close"
          onIconPress={() => navigation.navigate('Profile')}
        />
        <TitleField title="Suivi nutriments" />
        <View>
          <ConsumptionCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/1024px-OOjs_UI_icon_alert-yellow.svg.png"
            name="Consommation depassee"
            quantity="Votre consommation de sel a depasser la limite autoriser"
            onPress={() => setModalIsOpen(true)}
          />
        </View>
        <TitleField title="Nouveaux conseils" />
        <View>
          <ConsumptionCard
            image="https://static.750g.com/images/600-600/ae50c7b631401f9f36e76925e5483ec7/gratin-de-pates.jpg"
            name="Gratin de pate"
            quantity="Ce repas comporte une quantite importante de potassium"
            onPress={() => setModalIsOpen(true)}
          />
        </View>
        <View>
          <ConsumptionCard
            image="https://static.750g.com/images/600-600/ae50c7b631401f9f36e76925e5483ec7/gratin-de-pates.jpg"
            name="Gratin de pates"
            quantity="Ce repas comporte une quantite importante de potassium"
            onPress={() => setModalIsOpen(true)}
          />
        </View>
      </ScrollView>
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 300,
          }}
        >
          <TitleField title="Informations complementaires" />
        </View>
      </CustomModal>
    </>
  );
};

TipsScreen.propTypes = {
  navigation: PropTypes.object,
};

TipsScreen.defaultProps = {
  navigation: {},
};

export default TipsScreen;
