import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SearchBarButton from './detail/SearchBarButton';
import styles from './styles/SearchScreenStyle';
import TempRecipesList from './detail/TempRecipesList';

const RecipesSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBarButton
        placeholder="Rechercher une recette"
        onPress={() => navigation.navigate('SearchList')}
      />
      <TempRecipesList/>
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
