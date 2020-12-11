import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/RecipesSearchScreenStyle';
import MyRecipesList from './detail/MyRecipesList';
import { Header } from '../../components';

const MyRecipesScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Header
        title="Mes recettes"
        iconName="plus"
        onIconPress={() => navigation.navigate('AddRecipe')}
      />
      
      <ScrollView>
        <MyRecipesList query={text} />
      </ScrollView>
    </View>
  );
};

MyRecipesScreen.propTypes = {
  navigation: PropTypes.object,
};

MyRecipesScreen.defaultProps = {
  navigation: /* istanbul ignore next */ () => {},
};

export default MyRecipesScreen;
