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

import { getAllRecipes, getRecipeByID } from '../../requests';
import RecipeItemButton from '../../components/button/RecipeItemButton';
import SearchBarButton from '../Search/detail/SearchBarButton';
import styles from './styles/ListRecipeScreenStyle';
import { colors } from '../../themes';

const ListRecipeScreen = ({ navigation: { navigate } }) => {
  const windowHeight = Dimensions.get('window').height;
  // TODO fetch bestrecipe and recommanded recipe
  const bestRecipes = [
    {
      id: 1,
      Name: 'Pommes de terres risolées',
      Image: './test/patates_risolées.jpg',
      Rating: '3.5',
      Time: '30mn',
      People: '2',
      IsFav: false,
      Instructions: [
        {
          step: 0,
          text: 'Epluchez les pommes de terres',
        },
        {
          step: 1,
          text: 'Coupe les pommes de terres en cubes',
        },
        {
          step: 2,
          text:
            "Cuire les pommes de terres dans l'eau bouillante pendant 20 minutes",
        },
        {
          step: 3,
          text:
            'Faire revenir les pommes de terres cuites dans le beurre pendant 10 minutes',
        },
        {
          step: 4,
          text: 'Saler, poivrer, ajouter le persil',
        },
      ],
      Ingredients: [
        {
          id: 0,
          text: '300g de pommes de terres',
        },
        {
          id: 1,
          text: '5g de sel',
        },
        {
          id: 2,
          text: '5g de poivre',
        },
        {
          id: 3,
          text: '5g Persil',
        },
      ],
      Notes: [
        {
          id: 0,
          Auteur: 'Romain66',
          Note: '4',
          Commentaire: "J'adore !",
        },
        {
          id: 1,
          Auteur: 'Clement36',
          Note: '2',
          Commentaire: 'Beurk !',
        },
        {
          id: 2,
          Auteur: 'Arodef',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 3,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 4,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 5,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 6,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 7,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 8,
          Auteur: 'FagLord89',
          Note: '3',
          Commentaire: 'Meh !',
        },
      ],
    },
    {
      id: 2,
      Name: 'Tomates mozarella',
      Image: './test/tomates_mozarella.jpg',
      Rating: '4.5',
      Time: '10mn',
      People: '1',
      IsFav: true,
      Instructions: [
        {
          step: 0,
          text: 'Epluchez les pommes de terres',
        },
        {
          step: 1,
          text: 'Coupe les pommes de terres en cubes',
        },
        {
          step: 2,
          text:
            "Cuire les pommes de terres dans l'eau bouillante pendant 20 minutes",
        },
        {
          step: 3,
          text:
            'Faire revenir les pommes de terres cuites dans le beurre pendant 10 minutes',
        },
        {
          step: 4,
          text: 'Saler, poivrer, ajouter le persil',
        },
      ],
      Ingredients: [
        {
          id: 0,
          text: '300g de pommes de terres',
        },
        {
          id: 1,
          text: '5g de sel',
        },
        {
          id: 2,
          text: '5g de poivre',
        },
        {
          id: 3,
          text: '5g Persil',
        },
      ],
      Notes: [
        {
          id: 0,
          Auteur: 'Romain66',
          Note: '4',
          Commentaire: "J'adore !",
        },
        {
          id: 1,
          Auteur: 'Clement36',
          Note: '2',
          Commentaire: 'Beurk !',
        },
        {
          id: 2,
          Auteur: 'Arodef',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 3,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 4,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 5,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 6,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 7,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 8,
          Auteur: 'FagLord89',
          Note: '3',
          Commentaire: 'Meh !',
        },
      ],
    },
    {
      id: 3,
      Name: 'Poulet ananas',
      Image: './test/poulet_ananas.jpg',
      Rating: '4.5',
      Time: '30mn',
      People: '2-3',
      IsFav: true,
      Instructions: [
        {
          step: 0,
          text: 'Epluchez les pommes de terres',
        },
        {
          step: 1,
          text: 'Coupe les pommes de terres en cubes',
        },
        {
          step: 2,
          text:
            "Cuire les pommes de terres dans l'eau bouillante pendant 20 minutes",
        },
        {
          step: 3,
          text:
            'Faire revenir les pommes de terres cuites dans le beurre pendant 10 minutes',
        },
        {
          step: 4,
          text: 'Saler, poivrer, ajouter le persil',
        },
      ],
      Ingredients: [
        {
          id: 0,
          text: '300g de pommes de terres',
        },
        {
          id: 1,
          text: '5g de sel',
        },
        {
          id: 2,
          text: '5g de poivre',
        },
        {
          id: 3,
          text: '5g Persil',
        },
      ],
      Notes: [
        {
          id: 0,
          Auteur: 'Romain66',
          Note: '4',
          Commentaire: "J'adore !",
        },
        {
          id: 1,
          Auteur: 'Clement36',
          Note: '2',
          Commentaire: 'Beurk !',
        },
        {
          id: 2,
          Auteur: 'Arodef',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 3,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 4,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 5,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 6,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 7,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 8,
          Auteur: 'FagLord89',
          Note: '3',
          Commentaire: 'Meh !',
        },
      ],
    },
    {
      id: 4,
      Name: 'Epinard au beurre',
      Image: './test/epinard_au_beurre.jpg',
      Rating: '2',
      Time: '10mn',
      People: '1',
      IsFav: false,
      Instructions: [
        {
          step: 0,
          text: 'Epluchez les pommes de terres',
        },
        {
          step: 1,
          text: 'Coupe les pommes de terres en cubes',
        },
        {
          step: 2,
          text:
            "Cuire les pommes de terres dans l'eau bouillante pendant 20 minutes",
        },
        {
          step: 3,
          text:
            'Faire revenir les pommes de terres cuites dans le beurre pendant 10 minutes',
        },
        {
          step: 4,
          text: 'Saler, poivrer, ajouter le persil',
        },
      ],
      Ingredients: [
        {
          id: 0,
          text: '300g de pommes de terres',
        },
        {
          id: 1,
          text: '5g de sel',
        },
        {
          id: 2,
          text: '5g de poivre',
        },
        {
          id: 3,
          text: '5g Persil',
        },
      ],
      Notes: [
        {
          id: 0,
          Auteur: 'Romain66',
          Note: '4',
          Commentaire: "J'adore !",
        },
        {
          id: 1,
          Auteur: 'Clement36',
          Note: '2',
          Commentaire: 'Beurk !',
        },
        {
          id: 2,
          Auteur: 'Arodef',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 3,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 4,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 5,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 6,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 7,
          Auteur: 'Alan Smithee',
          Note: '3',
          Commentaire: 'Meh !',
        },
        {
          id: 8,
          Auteur: 'FagLord89',
          Note: '3',
          Commentaire: 'Meh !',
        },
      ],
    },
  ];

  const recommandedRecipes = bestRecipes;
  const [expanded, setExpanded] = React.useState(true);

  const changeLayout = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  getAllRecipes();
  getRecipeByID(1);

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
              title={item.Name}
              mark={item.Rating}
              cookingTime={item.Time}
              nbCutleries={item.People}
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
          data={recommandedRecipes}
          horizontal
          renderItem={({ item }) => (
            <RecipeItemButton
              key={item.id}
              id={item.id}
              title={item.Name}
              mark={item.Rating}
              cookingTime={item.Time}
              nbCutleries={item.People}
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

ListRecipeScreen.propTypes = {
  navigation: PropTypes.object,
};

ListRecipeScreen.defaultProps = {
  navigation: {},
};

export default ListRecipeScreen;
