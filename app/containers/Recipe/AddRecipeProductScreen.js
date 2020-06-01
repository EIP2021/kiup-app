import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { moderateScale } from 'react-native-size-matters';
import { TitleField } from '../../components/field';
import styles from './styles/AddRecipeProductStyle';
import {
  NavigateRecipeNextButton,
  RecipeAddProductButton,
} from '../../components/button';
import NutrimentsStats from './detail/RecipeNutrimentsStats';
import { colors } from '../../themes';

const AddRecipeProductScreen = () => {
  return (
    <View style={styles.container}>
      <TitleField
        title="Choisissez vos ingrédients"
        titleStyle={styles.titleStyle}
      />
      <View
        style={{
          height: '45%',
          width: '100%',
          borderTopColor: 'grey',
          borderTopWidth: 1,
        }}
      >
        <FlatList
          data={[]}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          ListFooterComponent={<RecipeAddProductButton />}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#E6E6E6',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.bottomTitleInfoNutrimentsContainers}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                fontSize: moderateScale(16),
                color: colors.primary,
                fontWeight: 'bold',
              }}
            >
              Apports nutritionnels
            </Text>
          </View>
          <NutrimentsStats />
        </View>
        <View style={styles.nextbuttonContainers}>
          <NavigateRecipeNextButton screenName="AddRecipeTime" text="Continuer" />
        </View>
      </View>
    </View>
  );
};

export default AddRecipeProductScreen;
