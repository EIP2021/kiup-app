import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import RecipeItemButton from '../../../components/button/RecipeItemButton';
import { getPendingStatus } from '../../../selectors';
import {
  FlatList
} from 'react-native';

const RecipesList = ({query, bestRecipes}) => {
  const filteredData = bestRecipes.filter(recipe => recipe.name.includes(query));
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
  return (<FlatList
  data={filteredData}
  renderItem={({ item }) => (
    <RecipeItemButton
      key={item.id}
      id={item.id}
      title={item.name}
      mark={getRating(item)}
      cookingTime={item.cookTime}
      nbCutleries={item.people}
      favByUser={item.isFav}
      image={item.image}
      item={item}
    />
  )}
  keyExtractor={item => item.id}
/>)
};

const mapStateToProps = state => ({
  pending: getPendingStatus(state, 'bestRecipes'),
  bestRecipes: state.bestRecipes,
});

RecipesList.propTypes = {
  bestRecipes: PropTypes.array,
};

RecipesList.defaultProps = {
  bestRecipes: [],
};

export default connect(mapStateToProps)(RecipesList);