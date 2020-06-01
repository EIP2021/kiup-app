import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { TitleField } from '../../components/field';
import styles from './styles/AddRecipeProductStyle';
import {
  NavigateRecipeNextButton,
  RecipeAddProductButton,
} from '../../components/button';
import NutrimentsStats from './detail/RecipeNutrimentsStats';

const AddRecipeProductScreen = () => {
  return (
    <View style={styles.firstContainer}>
      <TitleField
        title="Choisissez vos ingrédients"
        titleStyle={styles.titleStyle}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          data={[]}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          ListFooterComponent={<RecipeAddProductButton />}
        />
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.bottomTitleInfoNutrimentsContainers}>
          <View style={styles.titleContainer}>
            <Text style={styles.textStyle}>Apports nutritionnels</Text>
          </View>
          <NutrimentsStats />
        </View>
        <View style={styles.nextbuttonContainers}>
          <NavigateRecipeNextButton
            screenName="AddRecipeTime"
            text="Continuer"
          />
        </View>
      </View>
    </View>
  );
};

export default AddRecipeProductScreen;
