import React from 'react';
import { NavigateImageButton } from '../../../components/button';

const categorieList = {
  spice: { image: 'spice', title: 'Épice', id: '1005' },
  herb: { image: 'herb', title: 'Herbe', id: '1006' },
  cheese: { image: 'cheese', title: 'Fromage', id: '501' },
  fruit: { image: 'fruit', title: 'Fruit', id: '204' },
  vegetable: { image: 'vegetable', title: 'Légume', id: '201' },
  meat: { image: 'meat', title: 'Viande', id: '402' },
  fish: { image: 'fish', title: 'Poisson', id: '406' },
  charcuterie: { image: 'charcuterie', title: 'Charcuterie', id: '403' },
  starchy: { image: 'starchy', title: 'Féculent', id: '301' },
  bread: { image: 'bread', title: 'Pain', id: '302' },
  alcohol: { image: 'alcohol', title: 'Alcool', id: '603' },
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
