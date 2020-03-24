import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import ImagePicker from 'react-native-image-picker';
import { images } from '../../themes';
import styles from './styles/AddRecipeImageButtonStyle';

const options = {
  title: 'Choisissez une photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const AddRecipeImageButton = ({ input: { value, onChange } }) => {
  const source = () => {
    if (value) return { uri: value };
    return images.defaultRecipe;
  };
  return (
    <TouchableOpacity
      style={styles.pictureInputContainerStyle}
      onPress={() => {
        ImagePicker.showImagePicker(options, response => {
          if (
            !response.didCancel &&
            !response.error &&
            !response.customButton
          ) {
            onChange(response.uri);
          }
        });
      }}
    >
      <Image
        source={source()}
        style={value ? styles.recipePicture : styles.defaultRecipePicture}
        resizeMode="cover"
      />
      {!value && (
        <Image
          source={images.addPicture}
          style={styles.addPictureLogo}
          resizeMode="cover"
        />
      )}
    </TouchableOpacity>
  );
};

AddRecipeImageButton.propTypes = {
  input: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

AddRecipeImageButton.defaultProps = {
  input: {},
  value: '',
  onChange: /* istanbull ignore next */ () => {},
};

export default AddRecipeImageButton;
