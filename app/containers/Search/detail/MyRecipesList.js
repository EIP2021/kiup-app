import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import RecipeItemButton from '../../../components/button/RecipeItemButton';
import { getPendingStatus } from '../../../selectors';

const MyRecipesList = ({ query, myRecipes }) => {
  const filteredData = myRecipes.filter(recipe =>
    recipe.name.includes(query)
  );
  const getRating = item => {
    let ratingRecipe = 0;
    let numberRecipes = 0;
    let average = 0;

    item.comments.forEach(comment => {
      ratingRecipe += comment.Note;
      numberRecipes += 1;
    });

    if (ratingRecipe === 0) {
      average = item.rating.toFixed(1);
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
  pending: getPendingStatus(state, 'myRecipes'),
  myRecipes: state.myRecipes,
});

MyRecipesList.propTypes = {
  myRecipes: PropTypes.array,
};

MyRecipesList.defaultProps = {
  myRecipes: [],
};

export default connect(mapStateToProps)(MyRecipesList);
