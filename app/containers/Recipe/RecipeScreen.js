import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/RecipeScreenStyle';
import { Header, TitleField } from '../../components';

const RecipeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Recettes"
        iconName="ios-add"
        onIconPress={() => navigation.navigate('AddRecipe')}
      />
      <TitleField
        title="Recettes favorites"
        titleStyle={styles.featuredTitle}
      />
    </View>
  );
};

RecipeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RecipeScreen;
