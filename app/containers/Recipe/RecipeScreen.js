import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
  Modal,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Header, AirbnbRating } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/RecipeScreenStyle';
import RecipeItemButton from '../../components/button/RecipeItemButton';
import { colors } from '../../themes';

const RecipeScreen = ({ navigation }) => {
  const { state } = navigation;
  const { item } = state.params;
  const [modalVisible, setModal] = React.useState(false);
  const [selected, setSelected] = React.useState('instructions');
  const windowHeight = Dimensions.get('window').height;

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const sendRate = () => {
    setModal(false);
  };
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'keyboard-arrow-left',
          color: colors.primary,
          size: 40,
          onPress: () => navigation.navigate('ListRecipe'),
        }}
        centerComponent={{
          text: item.name,
          style: {
            color: colors.primary,
            fontSize: moderateScale(20),
            fontWeight: 'bold',
            width: '120%',
          },
        }}
        containerStyle={{
          backgroundColor: '#fff',
          paddingTop: -15,
          height: 50,
        }}
      />
      <View
        style={{
          borderBottomColor: colors.primary,
          borderBottomWidth: 3,
        }}
      />
      <ScrollView style={{ height: windowHeight - 127 }}>
        <RecipeItemButton
          key={item.id}
          id={item.id}
          title={item.name}
          mark={item.rating}
          cookingTime={item.cookTime}
          nbCutleries={item.people}
          favByUser={item.isFav}
          item={item}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              width: '25%',
              borderBottomColor:
                selected === 'instructions' ? 'transparent' : 'grey',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderTopColor: 'grey',
            }}
            onPress={() => {
              setSelected('instructions');
            }}
          >
            <Icon name="book" size={40} color="brown" />
            <Text style={{ alignSelf: 'center' }}>{'  '}Instructions</Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightColor: 'grey',
              borderRightWidth: 1,
            }}
          />
          <TouchableOpacity
            style={{
              width: '25%',
              borderBottomColor:
                selected === 'ingredients' ? 'transparent' : 'grey',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderTopColor: 'grey',
            }}
            onPress={() => {
              setSelected('ingredients');
            }}
          >
            <Icon name="list" size={40} color="black" />
            <Text style={{ alignSelf: 'center' }}>{'  '}Ingredients</Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightColor: 'grey',
              borderRightWidth: 1,
            }}
          />
          <TouchableOpacity
            style={{
              width: '25%',
              borderBottomColor:
                selected === 'nutriments' ? 'transparent' : 'grey',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderTopColor: 'grey',
            }}
            onPress={() => {
              setSelected('nutriments');
            }}
          >
            <Icon name="pie-chart-outlined" size={40} color="grey" />
            <Text style={{ alignSelf: 'center' }}>{'  '}Nutriments</Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightColor: 'grey',
              borderRightWidth: 1,
            }}
          />
          <TouchableOpacity
            style={{
              width: '25%',
              borderBottomColor: selected === 'notes' ? 'transparent' : 'grey',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderTopColor: 'grey',
            }}
            onPress={() => {
              setSelected('notes');
            }}
          >
            <Icon name="star" size={40} color="yellow" />
            <Text style={{ alignSelf: 'center' }}>{'  '}Notes</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: '1%',
            display: selected === 'instructions' ? 'flex' : 'none',
          }}
        >
          {item.steps.map(prop => {
            return (
              <View
                key={prop.step}
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    {prop.step}.
                  </Text>
                  <Text> {prop.text} </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            marginBottom: '1%',
            display: selected === 'ingredients' ? 'flex' : 'none',
          }}
        >
          {item.ingredients.map(prop => {
            return (
              <View
                key={prop.id}
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    {prop.id}.
                  </Text>
                  <Text> {prop.text} </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            marginBottom: '1%',
            display: selected === 'nutriments' ? 'flex' : 'none',
          }}
        >
          {item.ingredients.map(prop => {
            return (
              <View
                key={prop.id}
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    {prop.id}.
                  </Text>
                  <Text> {prop.text} </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ display: selected === 'notes' ? 'flex' : 'none' }}>
          <Modal
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => closeModal()}
            transparent
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00000080',
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 350,
                  backgroundColor: '#fff',
                  padding: 20,
                }}
              >
                <Text style={{ fontSize: 25 }}>Noter la recette !</Text>
                <AirbnbRating
                  count={5}
                  reviews={['Deguelasse sah', 'Meh', 'OK', 'Bon', 'Parfait']}
                  defaultRating={3}
                  size={40}
                />
                <Text style={{ fontSize: 25 }}>Commentaire:</Text>
                <TextInput
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  maxLength={256}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Button
                    color="green"
                    onPress={() => sendRate()}
                    title="Envoyer"
                  />
                  <Button
                    color="red"
                    onPress={() => closeModal()}
                    title="Fermer"
                  />
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            style={styles.ratingButton}
            onPress={() => openModal()}
          >
            <Icon size={35} name="star" color="grey" />
            <Text style={{ fontSize: 30, color: 'grey' }}>
              {'  '}Noter la recette !
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          />
          {item.comments &&
            item.comments.map(prop => {
              return (
                <View
                  key={prop.id}
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}
                    >
                      {prop.Auteur}
                    </Text>
                    <Text style={styles.ratingsRecipe}> {prop.Note} </Text>
                    <Icon size={20} name="star" color="yellow" />
                  </View>
                  <Text>{prop.Commentaire}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

RecipeScreen.propTypes = {
  navigation: PropTypes.object,
};

RecipeScreen.defaultProps = {
  navigation: {},
};

export default RecipeScreen;
