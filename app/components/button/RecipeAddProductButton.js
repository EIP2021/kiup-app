import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import { images } from '../../themes';
import styles from './styles/RecipeAddProductButtonStyle';
import NavigateProductCategoryRecipeButton from './NavigateProductCategoryRecipeButton';

const RecipeAddProductButton = () => {
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

export default RecipeAddProductButton;
