import React from "react";
import RecipeItemButton from "../../../components/button/RecipeItemButton";

// TODO : Fetch search with criterias from API instead of defining recipes
const recipesList = {
  recipe0: {
    id: 0,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 4.67,
    cookingTime: '1h45min',
    nbCutleries: '1 à 2',
    favByUser: true,
  },
  recipe1: {
    id: 1,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 3.73,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
  recipe2: {
    id: 2,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 2.52,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
  recipe3: {
    id: 3,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 1.51,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
  recipe4: {
    id: 4,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 0.43,
    cookingTime: '1h45min',
    nbCutleries: '1 à 2',
    favByUser: true,
  },
  recipe5: {
    id: 5,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 3.5,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
  recipe6: {
    id: 6,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 4.5,
    cookingTime: '1h45min',
    nbCutleries: '1 à 2',
    favByUser: true,
  },
  recipe7: {
    id: 7,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 3.5,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
  recipe8: {
    id: 8,
    title: 'Pommes de terre façon arrabbiata et gambas au basilic',
    mark: 3.5,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
  recipe9: {
    id: 9,
    title:
      'Pommes de terre façon arrabbiata et gambas au basilic avec sa sauce aux choux de brussels',
    mark: 3.5,
    cookingTime: '1h',
    nbCutleries: '2 à 3',
    favByUser: false,
  },
};

const RecipesList = query => {
  return Object.keys(recipesList).map(key => {
    return (
      <RecipeItemButton
        key={key}
        id={recipesList[key].id}
        title={recipesList[key].title}
        mark={recipesList[key].mark}
        cookingTime={recipesList[key].cookingTime}
        nbCutleries={recipesList[key].nbCutleries}
        favByUser={recipesList[key].favByUser}
      />
    );
  });
};

export default RecipesList;
