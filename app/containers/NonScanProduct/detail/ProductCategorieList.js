import React from 'react';
import { NavigateImageButton } from '../../../components/button';

const categorieList = {
  spice: { image: 'spice', title: 'Épice' },
  cheese: { image: 'cheese', title: 'Fromage' },
  fruit: { image: 'fruit', title: 'Fruit' },
  vegetable: { image: 'vegetable', title: 'Légume' },
  meat: { image: 'meat', title: 'Viande' },
  fish: { image: 'fish', title: 'Poisson' },
  charcuterie: { image: 'charcuterie', title: 'Charcuterie' },
  poultry: { image: 'poultry', title: 'Volaille' },
  cereal: { image: 'cereal', title: 'Céréale' },
  starchy: { image: 'starchy', title: 'Féculent' },
  alcohol: { image: 'alcohol', title: 'Alcool' },
};

const ProductCategorieList = () => {
  const renderedList = Object.keys(categorieList).map(key => {
    return (
      <NavigateImageButton
        image={categorieList[key].image}
        title={categorieList[key].title}
        screenName="NonScanProductList"
        key={key}
      />
    );
  });
  return renderedList;
};

export default ProductCategorieList;
