import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/RecipesSearchScreenStyle';
import RecipesList from './detail/RecipesList';

const RecipesSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Recettes</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher une recette"
      />
      <ScrollView>
        <RecipesList />
      </ScrollView>
    </View>
  );
};

RecipesSearchScreen.propTypes = {
  navigation: PropTypes.object,
};

RecipesSearchScreen.defaultProps = {
  navigation: /* istanbul ignore next */ () => {},
};

export default RecipesSearchScreen;
