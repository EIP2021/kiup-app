import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../../themes';
import TextWithLogo from '../layout/TextWithLogo';
import styles from './styles/RecipeItemButtonStyle';
// import NavigationService from '../../services/navigation';

const RecipeItemButton = ({
  title,
  mark,
  markLabel,
  cookingTime,
  nbCutleries,
  favByUser,
}) => {
  const markInfo = `${mark} ${markLabel}`;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.imageContainer}>
          <Image source={images.defaultRecipe} />
        </View>
        <View style={styles.bottomContainer}>
          <TextWithLogo
            text={markInfo}
            textColor={colors.primary}
            logo="excellentRatingStar"
          />
          <View style={styles.cookingContainer}>
            <Text style={styles.cookingData}>
              <TextWithLogo
                text={cookingTime}
                textColor={colors.light_grey}
                logo="timer"
                isLogoBefore={false}
              />
              <TextWithLogo
                text={nbCutleries}
                textColor={colors.light_grey}
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
