import React from 'react';
import { SearchBar } from 'react-native-elements';

import styles from './styles/SearchBarInputStyle';

const SearchBarInput = () => {
  return (
    <SearchBar
      placeholder="Rechercher un produit"
      lightTheme
      containerStyle={styles.container}
      inputContainerStyle={styles.input}
    />
  );
};

export default SearchBarInput;
