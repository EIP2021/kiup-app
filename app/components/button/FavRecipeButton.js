import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../themes';
import styles from './styles/FavRecipeButtonStyle';

const favOrUnfavRecipe = favByUser => {
  favByUser = !favByUser;
};

const FavRecipeButton = ({ favByUser }) => {
  return (
    <TouchableOpacity
      style={styles.favorites}
      onPress={() => favOrUnfavRecipe(favByUser)}
    >
      <Image source={favByUser ? images.favByUser : images.notFavByUser} />
    </TouchableOpacity>
  );
};

FavRecipeButton.propTypes = {
  favByUser: PropTypes.bool,
};

FavRecipeButton.defaultProps = {
  favByUser: false,
};

export default FavRecipeButton;
