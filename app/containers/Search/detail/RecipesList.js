import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import RecipeItemButton from '../../../components/button/RecipeItemButton';
import { getPendingStatus } from '../../../selectors';

const RecipesList = ({ query, bestRecipes }) => {
  const filteredData = bestRecipes.filter(recipe =>
    recipe.name.includes(query)
  );
  const getRating = item => {
    let ratingRecipe = 0;
    let numberRecipes = 0;
    let average = 0;

    if (item.comments) {
      item.comments.forEach(comment => {
        ratingRecipe += comment.Note;
        numberRecipes += 1;
      });
    }

    if (ratingRecipe === 0) {
      average = item.rating ? item.rating.toFixed(1) : 0;
    } else {
      average = (ratingRecipe / numberRecipes).toFixed(1);
    }

    return average;
  };
  return (
    <FlatList
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
    />
  );
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
