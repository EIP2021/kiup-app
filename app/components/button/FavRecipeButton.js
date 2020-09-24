import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../themes';
import styles from './styles/FavRecipeButtonStyle';

const FavRecipeButton = ({ defaultStatus, onPress }) => {
  const [isFavorite, setIsFavorite] = useState(defaultStatus);

  return (
    <TouchableOpacity
      style={styles.favorites}
      onPress={() => {
        setIsFavorite(!isFavorite);
        onPress(isFavorite);
      }}
    >
      <Image source={isFavorite ? images.favByUser : images.notFavByUser} />
    </TouchableOpacity>
  );
};

FavRecipeButton.propTypes = {
  defaultStatus: PropTypes.bool,
  onPress: PropTypes.func,
};

FavRecipeButton.defaultProps = {
  defaultStatus: false,
  onPress: /* istanbul ignore next */ () => {},
};

export default FavRecipeButton;
