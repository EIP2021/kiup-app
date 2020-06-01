import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/RecipesSearchScreenStyle';
import RecipesList from './detail/RecipesList';
import { Header } from '../../components';

const RecipesSearchScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
<<<<<<< HEAD
=======
      <Header
        title="Recettes"
        iconName="ios-add"
        onIconPress={() => navigation.navigate('AddRecipe')}
      />
>>>>>>> 37257c23125520817140a5fc21d52decda9e3c0b
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher une recette"
        onChangeText={t => setText(t)}
      />
      <ScrollView>
        <RecipesList query={text} />
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
