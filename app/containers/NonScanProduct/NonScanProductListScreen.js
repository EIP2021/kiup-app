import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { NavigateIconButton } from '../../components';
import SearchBarHeader from './detail/SearchBarHeader';
import ListTitle from './detail/ListTitle';
import styles from './styles/NonScanProductListScreenStyle';

const getContentToDisplay = title => {
  switch (title) {
    case 'Fruit':
      return (
        <View>
          <NavigateIconButton image="cherry" title="Cerise" />
          <NavigateIconButton image="apple" title="Pomme" />
          <NavigateIconButton image="pear" title="Poire" />
          <NavigateIconButton image="peach" title="Pêche" />
          <NavigateIconButton image="banana" title="Banane" />
          <NavigateIconButton image="whiteGrape" title="Raisin Blanc" />
          <NavigateIconButton image="blackGrape" title="Raison Noir" />
          <NavigateIconButton image="pineapple" title="Ananas" />
          <NavigateIconButton image="waterMelon" title="Pastèque" />
          <NavigateIconButton image="lychee" title="Litchi" />
          <NavigateIconButton
            image="tomato"
            title="Petit pot fruit avec banane pour bébé Petit pot fruit avec banane pour bébé"
          />
          <NavigateIconButton image="apricot" title="Abricot" />
          <NavigateIconButton image="lemon" title="Citron Jaune" />
          <NavigateIconButton image="melon" title="Melon" />
          <NavigateIconButton image="strawberry" title="Fraise" />
          <NavigateIconButton image="raspberry" title="Framboise" />
          <NavigateIconButton image="orange" title="Orange" />
          <NavigateIconButton image="mandarin" title="Mandarine" />
          <NavigateIconButton image="kiwi" title="Kiwi" />
          <NavigateIconButton image="grapeFruit" title="Pamplemousse" />
        </View>
      );
    default:
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No data</Text>
        </View>
      );
  }
};

const NonScanProductListScreen = ({ navigation }) => {
  const title = navigation.getParam('title');

  return (
    <View style={styles.container}>
      <SearchBarHeader navigation={navigation} title={title} />
      <ListTitle title="Fruit" />
      <ScrollView>{getContentToDisplay(title)}</ScrollView>
    </View>
  );
};

NonScanProductListScreen.navigationOptions = ({ navigation }) => {
  return { title: navigation.getParam('title') };
};

export default NonScanProductListScreen;
