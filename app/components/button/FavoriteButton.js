import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

const FavoriteButton = ({ defaultStatus, onPress, iconStyle }) => {
  const [isFavorite, setIsFavorite] = useState(defaultStatus);

  return (
    <Icon
      name={isFavorite ? 'ios-star' : 'ios-star-outline'}
      size={moderateScale(20)}
      color={isFavorite ? '#FFE178' : 'white'}
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
