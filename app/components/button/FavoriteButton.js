import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../themes';

const FavoriteButton = ({ defaultStatus, onPress, iconStyle }) => {
  const [isFavorite, setIsFavorite] = useState(defaultStatus);

  return (
    <Icon
      name={isFavorite ? 'favorite' : 'favorite-border'}
      size={moderateScale(28)}
      color={isFavorite ? '#E9005B' : colors.disable_text}
      style={iconStyle}
      onPress={() => {
        setIsFavorite(!isFavorite);
        onPress();
      }}
    />
  );
};

FavoriteButton.propTypes = {
  defaultStatus: PropTypes.bool,
  onPress: PropTypes.func,
  iconStyle: PropTypes.object,
};

FavoriteButton.defaultProps = {
  defaultStatus: false,
  onPress: /* istanbul ignore next */ () => {},
  iconStyle: {},
};

export default FavoriteButton;
