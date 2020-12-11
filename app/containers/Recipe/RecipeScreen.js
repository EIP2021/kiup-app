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
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Header, AirbnbRating } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/RecipeScreenStyle';
import { colors, images } from '../../themes';
import { FavoriteButton } from '../../components';
import RecipeMarkFormatter from '../../components/layout/RecipeMarkFormatter';
import TextWithLogo from '../../components/layout/TextWithLogo';
import { connect } from 'react-redux';
import { updateRecipe } from '../../requests';

const RecipeScreen = ({ navigation, informations, updateComments }) => {
  const { state } = navigation;
  const { item, index, mark } = state.params;
  const [modalVisible, setModal] = React.useState(false);
  const [commentaire, onChangeCommentaire] = React.useState("");
  const [rating, onChangeRating] = React.useState(3);
  const [selected, setSelected] = React.useState('instructions');
  const windowHeight = Dimensions.get('window').height;
  let image = "";

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const sendRate = () => {
    if (item.comments === null){
      item.comments = [{id: 0, Note: rating, Commentaire: commentaire, Auteur: informations.firstName + ' ' + informations.lastName}]
    }
    else {
      item.comments.push({id: 0, Note: rating, Commentaire: commentaire, Auteur: informations.firstName + ' ' + informations.lastName})
    }
    updateComments(item.id, { name: item.name, description: item.description, prepTime: item.prepTime, cookTime: item.cookTime, ingredients: item.ingredients, steps: item.steps, comments: item.comments }, index);
    setModal(false);
  };

  if (image === null) {
    image = 'https://i.kiup.tech/tksbb.jpg';
  }
  else {
    image = 'https://i.kiup.tech/' + item.image;
  } 
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
        rightComponent={<FavoriteButton/>}
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
      <Image style={{ width: '100%', height: windowHeight - ((windowHeight / 100) * 70), backgroundColor: colors.very_light_grey, alignItems: 'center',justifyContent: 'center'}}source={{uri: image}} />
        <View style={{ paddingTop: 10, borderTopWidth: 3, borderTopColor: colors.primary,marginBottom: 10, flexDirection: 'row', marginBottom: 10 }}>
          <TouchableOpacity style={{width: '33%'}} onPress={() => {setSelected('instructions');}}>
            <Text style={{ alignSelf: 'center', fontSize: 15, color: selected === 'instructions' ? colors.primary : 'grey' }}>{'  '}Instructions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '33%'}} onPress={() => {setSelected('ingredients');}}>
            <Text style={{ alignSelf: 'center', fontSize: 15, color: selected === 'ingredients' ? colors.primary : 'grey' }}>{'  '}Ingredients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '33%'}} onPress={() => {setSelected('notes');}}>
            <Text style={{ alignSelf: 'center',fontSize: 15, color: selected === 'notes' ? colors.primary : 'grey' }}>{'  '}Notes</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <RecipeMarkFormatter mark={mark} position="inside" />
        <View style={{marginLeft: 10}}>
        <Text style={{fontSize: moderateScale(20), fontWeight: 'bold', color: 'grey'}}>{item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
          <TextWithLogo
                text={item.prepTime}
                textColor="light_grey"
                logo="timer"
                position="after"
            />
          <TextWithLogo
                text={item.people}
                textColor="light_grey"
                logo="cutleries"
                position="after"
          />
          </View>
        </View>
        </View>
        <View
          style={{
            marginBottom: '1%',
            display: selected === 'instructions' ? 'flex' : 'none',
          }}
        >
          <View style={{
            marginTop: '3%',
            borderWidth: 1,
            borderColor: '#cccccc',
            backgroundColor: '#cccccc'
          }}>
            <Text style={{
              marginLeft: 10,
              color: 'black'
            }}>Etapes</Text>
          </View>
          {item.steps.map(prop => {
            return (
              <View
                key={prop.step}
                style={{
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 1,
                  marginTop: 5,
                }}
              >
                <View style={{ flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#cccccc'
                    }}
                  >
                    {prop.step}.{'  '}
                  </Text>
                  <Text style={{fontSize: 15, color: 'black'}}>{prop.text} </Text>
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
          <View style={{
            marginTop: '3%',
            borderWidth: 1,
            borderColor: '#cccccc',
            backgroundColor: '#cccccc'
          }}>
            <Text style={{
              marginLeft: 10,
              color: 'black'
            }}>Ingredients</Text>
          </View>
          {item.ingredients.map(prop => {
            return (
              <View
                key={prop.id}
                style={{
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 1,
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#cccccc'
                    }}
                  >
                  </Text>
                  <Text style={{fontSize: 17, color: 'black'}}> {prop.text} </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ display: selected === 'notes' ? 'flex' : 'none' }}>
        <View style={{
            marginTop: '3%',
            borderWidth: 1,
            borderColor: '#cccccc',
            backgroundColor: '#cccccc'
          }}>
            <Text style={{
              marginLeft: 10,
              color: 'black'
            }}>Notes</Text>
          </View>
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
                  reviews={['Mauvais', 'Pas bon', 'Moyen', 'Bon', 'Parfait']}
                  onFinishRating={rating => onChangeRating(rating)}
                  defaultRating={3}
                  size={40}
                />
                <Text style={{ fontSize: 25 }}>Commentaire:</Text>
                <TextInput
                  multiline
                  onChangeText={commentaire => onChangeCommentaire(commentaire)}
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
                </View>
                <RecipeMarkFormatter mark={prop.Note} position="after" />
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
  informations: PropTypes.object,
};

RecipeScreen.defaultProps = {
  navigation: {},
  informations: {},
};

const mapDispatchToProps = dispatch => {
  return {
    updateComments: (id, payload) => {
      dispatch(updateRecipe(id, payload));
    },
  };
};

const mapStateToProps = state => {
  return {
    informations: state.profileInformations,
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (RecipeScreen);
