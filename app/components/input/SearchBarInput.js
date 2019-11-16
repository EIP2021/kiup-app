import React, { useState, useEffect, useRef } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles/SearchBarInputStyle';

const SearchBarInput = ({ updateSearch, isFocused, ...props }) => {
  const searchBar = useRef();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 2) {
      updateSearch(query);
    }
  }, [query]);

  useEffect(() => {
    if (searchBar) {
      searchBar.current.focus();
    }
  }, []);

  return (
    <SearchBar
      ref={searchBar}
      placeholder="Rechercher un produit"
      {...props}
      focus
      searchIcon={null}
      onChangeText={text => setQuery(text)}
      onClear={() => setQuery('')}
      value={query}
      lightTheme
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
    />
  );
};

SearchBarInput.propTypes = {
  updateSearch: PropTypes.func,
  isFocused: PropTypes.bool,
};

SearchBarInput.defaultProps = {
  updateSearch: /* istanbul ignore next */ () => {},
  isFocused: false,
};

export default withNavigationFocus(SearchBarInput);
