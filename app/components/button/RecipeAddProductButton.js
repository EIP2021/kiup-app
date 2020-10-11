import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import { images } from '../../themes';
import styles from './styles/RecipeAddProductButtonStyle';
import NavigateProductCategoryRecipeButton from './NavigateProductCategoryRecipeButton';

const RecipeAddProductButton = ({ fields }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.leftContainer}>
          <Image
            source={images.addProductRecipeLogo}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Ajouter un produit</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Modal
          visible={modalVisible}
          animationType="fade"
          presentationStyle="overFullScreen"
          transparent
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.categoryContainer}>
              <NavigateProductCategoryRecipeButton
                image="scanProductRecipeLogo"
                title="Scan"
                screenName="AddRecipeScanner"
                params={fields}
                onPress={() => setModalVisible(false)}
              />
              <NavigateProductCategoryRecipeButton
                image="nonScanProductRecipeLogo"
                title="Rechercher"
                screenName="Search"
                onPress={() => setModalVisible(false)}
              />
              <NavigateProductCategoryRecipeButton
                image="recentProductRecipeLogo"
                title="Récent"
                onPress={() => setModalVisible(false)}
              />
              <NavigateProductCategoryRecipeButton
                image="favProductRecipeLogo"
                title="Favoris"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
};

RecipeAddProductButton.propTypes = {
  fields: PropTypes.object,
};

RecipeAddProductButton.defaultProps = {
  fields: {},
};

export default RecipeAddProductButton;
