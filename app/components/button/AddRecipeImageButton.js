import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
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

const AddRecipeImageButton = ({ input: { onChange } }) => {
  const [image, setImage] = useState('');
  const source = () => {
    if (image) return { uri: image };
    return images.defaultRecipe;
  };

  useEffect(() => {
    onChange(image);
  }, [image]);

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.pictureInputContainerStyle}
          onPress={() => {
            ImagePicker.showImagePicker(options, response => {
              if (
                !response.didCancel &&
                !response.error &&
                !response.customButton
              ) {
                setImage(response.uri);
              }
            });
            onChange('coucou');
          }}
        >
          <Image
            source={source()}
            style={image ? styles.recipePicture : styles.defaultRecipePicture}
            resizeMode="cover"
          />
          {!image && (
            <Image
              source={images.addPicture}
              style={styles.addPictureLogo}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

AddRecipeImageButton.propTypes = {
  input: PropTypes.object,
  onChange: PropTypes.func,
};

AddRecipeImageButton.defaultProps = {
  input: {},
  onChange: /* istanbull ignore next */ () => {},
};

export default AddRecipeImageButton;
