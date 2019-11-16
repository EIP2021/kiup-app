import React from 'react';
import { NavigateImageButton } from '../../../components/button';

const categorieList = {
  spice: {
    image: 'spice',
    title: 'Épice',
    placeholder: 'Rechercher une épice',
    id: '1005',
  },
  herb: {
    image: 'herb',
    title: 'Herbe',
    placeholder: 'Rechercher une herbe',
    id: '1006',
  },
  cheese: {
    image: 'cheese',
    title: 'Fromage',
    placeholder: 'Rechercher un fromage',
    id: '501',
  },
  fruit: {
    image: 'fruit',
    title: 'Fruit',
    placeholder: 'Rechercher un fruit',
    id: '204',
  },
  vegetable: {
    image: 'vegetable',
    title: 'Légume',
    placeholder: 'Rechercher un légume',
    id: '201',
  },
  meat: {
    image: 'meat',
    title: 'Viande',
    placeholder: 'Rechercher une viande',
    id: '402',
  },
  fish: {
    image: 'fish',
    title: 'Poisson',
    placeholder: 'Rechercher un poisson',
    id: '406',
  },
  charcuterie: {
    image: 'charcuterie',
    title: 'Charcuterie',
    placeholder: 'Rechercher une charcuterie',
    id: '403',
  },
  starchy: {
    image: 'starchy',
    title: 'Féculent',
    placeholder: 'Rechercher un féculent',
    id: '301',
  },
  bread: {
    image: 'bread',
    title: 'Pain',
    placeholder: 'Rechercher un pain',
    id: '302',
  },
  alcohol: {
    image: 'alcohol',
    title: 'Alcool',
    placeholder: 'Rechercher un alcool',
    id: '603',
  },
};

const ProductCategorieList = () => {
  const renderedList = Object.keys(categorieList).map(key => {
    return (
      <NavigateImageButton
        image={categorieList[key].image}
        title={categorieList[key].title}
        screenName="SearchList"
        key={key}
        params={{
          title: categorieList[key].title,
          id: categorieList[key].id,
          placeholder: categorieList[key].placeholder,
        }}
      />
    );
  });
  return renderedList;
};

export default ProductCategorieList;
