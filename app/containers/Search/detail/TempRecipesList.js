import React from 'react';
import RecipeItemButton from '../../../components/button/RecipeItemButton';

const recipesList = {
  recipe0: {
    id: '0',
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
  },
  recipe1: {
    id: '1',
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
  },
};

const ProductCategorieList = () => {
  const renderedList = Object.keys(recipesList).map(key => {
    return (
      <RecipeItemButton
        key={key}
        title={recipesList[key].title}
      />
    );
  });
  return renderedList;
};

export default ProductCategorieList;
