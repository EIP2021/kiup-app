import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';
import TextWithLogo from '../layout/TextWithLogo';
import RecipeMarkFormatter from '../layout/RecipeMarkFormatter';
import styles from './styles/RecipeItemButtonStyle';
import FavRecipeButton from './FavRecipeButton';
// import NavigationService from '../../services/navigation';

const RecipeItemButton = ({
  title,
  mark,
  cookingTime,
  nbCutleries,
  favByUser,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
        <FavRecipeButton favByUser={favByUser} />
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
  title: PropTypes.string,
};

RecipeItemButton.defaultProps = {
  title: '',
};

export default RecipeItemButton;
