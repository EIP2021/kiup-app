import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/RecipesSearchScreenStyle';
import FavRecipesList from './detail/FavRecipesList';
import { Header } from '../../components';

const FavRecipesScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Header
        title="Recettes favorites"
        iconName="plus"
        onIconPress={() => navigation.navigate('AddRecipe')}
      />
      
      <ScrollView>
        <FavRecipesList query={text} />
      </ScrollView>
    </View>
  );
};

FavRecipesScreen.propTypes = {
  navigation: PropTypes.object,
};

FavRecipesScreen.defaultProps = {
  navigation: /* istanbul ignore next */ () => {},
};

export default FavRecipesScreen;
