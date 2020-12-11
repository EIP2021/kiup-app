import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  // Dimensions,
} from 'react-native';
import { Container, Button, Fab, Text, Icon } from 'native-base';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';

import { getRecommendedRecipes, getBestRecipes } from '../../requests';
import { getPendingStatus } from '../../selectors';
import RecipeItemButton from '../../components/button/RecipeItemButton';
import SearchBarButton from '../Search/detail/SearchBarButton';
import styles from './styles/ListRecipeScreenStyle';
import { colors } from '../../themes';
import { ScrollView } from 'react-native-gesture-handler';

const ListRecipeScreen = ({
  navigation: { navigate },
  bestRecipes,
  recommendedRecipes,
  refreshData,
}) => {

  const [expanded, setExpanded] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  onRefreshRecipe = async () => {
    setRefreshing(true);
    await refreshData();
    setRefreshing(false)
  }

  getRating = (item) => {
    let ratingRecipe = 0;
    let numberRecipes = 0;
    let average = 0;

    item.comments.forEach(comment => {
      ratingRecipe += comment.Note;
      numberRecipes += 1;
    });
    if (ratingRecipe === 0) {
      average = item.rating.toFixed(1);
    }
    else {
      average = (ratingRecipe / numberRecipes).toFixed(1);
    }
    return(average);
  } 

  return (
    <Container>
      <ScrollView refreshControl={<RefreshControl onRefresh={onRefreshRecipe} refreshing={refreshing} ></RefreshControl>}>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <SearchBarButton
            placeholder="Rechercher une recette"
            onPress={() => navigate('RecipeSearch')}
          />
        </View>
        <SafeAreaView style={styles.containerList}>
          <Text style={styles.subTitle}>Meilleurs Recettes</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={bestRecipes}
            horizontal
            renderItem={({ item, index }) => (
              <RecipeItemButton
                key={item.id}
                id={item.id}
                title={item.name}
                mark={getRating(item)}
                cookingTime={item.cookTime}
                nbCutleries={item.people}
                favByUser={item.isFav}
                image={item.image}
                index={index}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.containerList}>
          <Text style={styles.subTitle}>Recettes recommandées</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={recommendedRecipes}
            horizontal
            renderItem={({ item, index }) => (
              <RecipeItemButton
                key={item.id}
                id={item.id}
                title={item.name}
                mark={getRating(item)}
                cookingTime={item.cookTime}
                nbCutleries={item.people}
                favByUser={item.isFav}
                image={item.image}
                index={index}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
      </ScrollView>
      <View style={{ flex: 1}}>
        <Fab
          active={expanded}
          direction="up"
          containerStyle={{ backgroundColor: colors.primary, borderRadius: 30, height: expanded ? 220 : 50, borderColor: 'white', borderWidth: 1 }}
          style={{ backgroundColor: colors.primary, borderColor: 'white', borderWidth: 1 }}
          position="bottomRight"
          onPress={() => setExpanded(!expanded)}
        >
          { expanded ? <Icon type="MaterialIcons" name="keyboard-arrow-down" /> : <Icon type="MaterialIcons" name="keyboard-arrow-up" />}
          <Button style={{ backgroundColor: 'white' }}>
            <Icon type="Ionicons" name="heart" style={{fontSize: 25, color: 'red' }} />
          </Button>
          <Button style={{ backgroundColor: 'white' }}>
            <Icon type="Ionicons" name="book" style={{ fontSize: 25, color: 'brown' }} />
          </Button>
          <Button style={{ backgroundColor: 'white'}} onPressIn={() => navigate('AddRecipe')}>
            <Icon type="Ionicons" name="add" style={{ fontSize: 25, color: colors.primary }}  />
          </Button>
        </Fab>
      </View>
    </Container>
  );
};

const mapStateToProps = state => ({
  pending: getPendingStatus(state, 'bestRecipes'),
  bestRecipes: state.bestRecipes,
  recommendedRecipes: state.recommendedRecipes,
});

const mapDispatchToProps = dispatch => {
  return {
    refreshData: () => {
      dispatch(getBestRecipes());
      dispatch(getRecommendedRecipes());
    },
  };
};

ListRecipeScreen.propTypes = {
  navigation: PropTypes.object,
  bestRecipes: PropTypes.array,
  recommendedRecipes: PropTypes.array,
  refreshData: PropTypes.func,
};

ListRecipeScreen.defaultProps = {
  navigation: {},
  bestRecipes: [],
  recommendedRecipes: [],
  refreshData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRecipeScreen);
