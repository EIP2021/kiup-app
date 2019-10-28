import React from 'react';
import { View, ScrollView } from 'react-native';

import { NavigateImageButton } from '../../components/button';
import { SearchBarInput } from '../../components/input';
import styles from './styles/NonScanProductScreenStyle';

const NonScanProductScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBarInput />
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={[styles.rowContainer, { marginTop: 5 }]}>
            <NavigateImageButton
              image="spice"
              title="Épice"
              screenName="NonScanProductList"
            />
            <NavigateImageButton
              image="cheese"
              title="Fromage"
              screenName="NonScanProductList"
            />
          </View>
          <View style={styles.rowContainer}>
            <NavigateImageButton
              image="fruit"
              title="Fruit"
              screenName="NonScanProductList"
            />
            <NavigateImageButton
              image="vegetable"
              title="Légume"
              screenName="NonScanProductList"
            />
          </View>
          <View style={styles.rowContainer}>
            <NavigateImageButton
              image="meat"
              title="Viande"
              screenName="NonScanProductList"
            />
            <NavigateImageButton
              image="fish"
              title="Poisson"
              screenName="NonScanProductList"
            />
          </View>
          <View style={styles.rowContainer}>
            <NavigateImageButton
              image="charcuterie"
              title="Charcuterie"
              screenName="NonScanProductList"
            />
            <NavigateImageButton
              image="poultry"
              title="Volaille"
              screenName="NonScanProductList"
            />
          </View>
          <View style={styles.rowContainer}>
            <NavigateImageButton
              image="cereal"
              title="Céréale"
              screenName="NonScanProductList"
            />
            <NavigateImageButton
              image="starchy"
              title="Féculent"
              screenName="NonScanProductList"
            />
          </View>
          <View style={styles.rowContainer}>
            <NavigateImageButton
              image="alcohol"
              title="Alcool"
              screenName="NonScanProductList"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NonScanProductScreen;
