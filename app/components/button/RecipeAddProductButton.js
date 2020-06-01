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
            <View
              style={{
                flex: 1,
                backgroundColor: '#00000075',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <NavigateProductCategoryRecipeButton
                image="scanProductRecipeLogo"
                title="Scan"
                onPress={setModalVisible}
              />
              <NavigateProductCategoryRecipeButton
                image="nonScanProductRecipeLogo"
                title="Rechercher"
                screenName="Search"
                onPress={setModalVisible}
              />
              <NavigateProductCategoryRecipeButton
                image="recentProductRecipeLogo"
                title="Récent"
                onPress={setModalVisible}
              />
              <NavigateProductCategoryRecipeButton
                image="favProductRecipeLogo"
                title="Favoris"
                onPress={setModalVisible}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
};

export default RecipeAddProductButton;
