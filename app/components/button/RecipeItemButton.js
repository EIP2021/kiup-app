import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../themes';
import TextWithLogo from '../layout/TextWithLogo';
import RecipeMarkFormatter from '../layout/RecipeMarkFormatter';
import styles from './styles/RecipeItemButtonStyle';
import FavRecipeButton from './FavRecipeButton';
import NavigationService from '../../services/navigation';

const favOrUnfavRecipe = favByUser => {};

const RecipeItemButton = ({
  id,
  title,
  mark,
  cookingTime,
  nbCutleries,
  favByUser,
  image,
  index,
  item,
}) => {
  if (image === null) {
    image = 'https://i.kiup.tech/tksbb.jpg';
  }
  else {
    image = 'https://i.kiup.tech/' + image;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate('Recipe', {
          id,
          item,
          index,
          mark
        });
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={1}>
          {title}
        </Text>
        <FavRecipeButton
          defaultStatus={favByUser}
          onPress={favOrUnfavRecipe()}
        />
        <Image style={styles.imageContainer} source={{uri: image}} />
        <View style={styles.bottomContainer}>
          <RecipeMarkFormatter mark={mark} position="before" />
          <View style={styles.cookingContainer}>
            <View style={styles.cookingData}>
              <TextWithLogo
                text={cookingTime + item.prepTime}
                textColor="light_grey"
                logo="timer"
                position="after"
              />
              <TextWithLogo
                text={nbCutleries}
                textColor="light_grey"
                logo="cutleries"
                position="after"
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

RecipeItemButton.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  mark: PropTypes.number,
  cookingTime: PropTypes.string,
  nbCutleries: PropTypes.string,
  favByUser: PropTypes.bool,
};

RecipeItemButton.defaultProps = {
  id: 0,
  title: '',
  mark: 3.5,
  cookingTime: '1h30min',
  nbCutleries: '1 à 2',
  favByUser: false,
};

export default RecipeItemButton;
