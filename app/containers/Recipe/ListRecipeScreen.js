import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  UIManager,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { getPendingStatus } from '../../selectors';
import RecipeItemButton from '../../components/button/RecipeItemButton';
import SearchBarButton from '../Search/detail/SearchBarButton';
import styles from './styles/ListRecipeScreenStyle';
import { colors } from '../../themes';

const ListRecipeScreen = ({ navigation: { navigate }, bestRecipes, recommendedRecipes }) => {
  const windowHeight = Dimensions.get('window').height;

  const [expanded, setExpanded] = React.useState(true);

  const changeLayout = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <SearchBarButton
          placeholder="Rechercher une recette"
          onPress={() => navigate('RecipeSearch')}
        />
      </View>
      <SafeAreaView style={styles.containerList}>
        <Text style={styles.subTitle}>Meilleurs Recettes</Text>
        <FlatList
          data={bestRecipes}
          horizontal
          renderItem={({ item }) => (
            <RecipeItemButton
              key={item.id}
              id={item.id}
              title={item.name}
              mark={item.rating}
              cookingTime={item.cookTime}
              nbCutleries={item.people}
              favByUser={item.isFav}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.containerList}>
        <Text style={styles.subTitle}>Recettes recommandées</Text>
        <FlatList
          data={recommendedRecipes}
          horizontal
          renderItem={({ item }) => (
            <RecipeItemButton
              key={item.id}
              id={item.id}
              title={item.name}
              mark={item.rating}
              cookingTime={item.cookTime}
              nbCutleries={item.people}
              favByUser={item.isFav}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View
        style={{
          height: expanded ? 0 : 240,
          overflow: 'hidden',
          right: 32,
          marginRight: '1%',
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          borderRadius: 30,
          borderWidth: 5,
          top: windowHeight - 390,
          borderColor: expanded ? 'transparent' : colors.primary,
        }}
      >
        <TouchableOpacity
          style={{ zIndex: 20 }}
          onPressIn={() => navigate('Welcome')}
        >
          <Icon name="favorite" size={40} color="red" />
          <Text>{'  '}Favoris</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={() => navigate('Welcome')}>
          <Icon name="book" size={40} color="brown" />
          <Text> Recettes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={() => navigate('AddRecipe')}>
          <Icon name="add" size={40} color="#2ecc71" />
          <Text>{'  '}Ajouter</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonMenu}
        activeOpacity={0.8}
        onPress={() => changeLayout()}
      >
        <Icon
          name="keyboard-arrow-up"
          size={40}
          color="white"
          style={styles.iconRight}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  pending: getPendingStatus(state, 'bestRecipes'),
  bestRecipes: state.bestRecipes,
  recommendedRecipes: state.recommendedRecipes,
});

ListRecipeScreen.propTypes = {
  navigation: PropTypes.object,
  bestRecipes: PropTypes.array,
  recommendedRecipes: PropTypes.array,
};

ListRecipeScreen.defaultProps = {
  navigation: {},
  bestRecipes: [],
  recommendedRecipes: [],
};

export default connect(
  mapStateToProps,
)(ListRecipeScreen);
