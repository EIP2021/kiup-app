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
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate('RecipeScreen', {
          id,
          title,
          nbCutleries,
          favByUser,
        });
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
        <FavRecipeButton
          defaultStatus={favByUser}
          onPress={favOrUnfavRecipe()}
        />
        <Image style={styles.imageContainer} source={images.defaultRecipe} />
        <View style={styles.bottomContainer}>
          <RecipeMarkFormatter mark={mark} />
          <View style={styles.cookingContainer}>
            <Text style={styles.cookingData}>
              <TextWithLogo
                text={cookingTime}
                textColor="light_grey"
                logo="timer"
                isLogoBefore={false}
              />
              <TextWithLogo
                text={nbCutleries}
                textColor="light_grey"
                logo="cutleries"
                isLogoBefore={false}
              />
            </Text>
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
