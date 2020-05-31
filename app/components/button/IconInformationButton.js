import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/IconInformationButtonStyle';
import { images } from '../../themes';

const IconInformationButton = ({ name, value, image, lastItem }) => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image
              source={image ? { uri: image } : images.noPhoto}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.leftText}>{name}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightText}>{value}</Text>
            <Icon
              name="chevron-right"
              color="rgb(180, 180, 180)"
              size={moderateScale(16)}
            />
          </View>
        </View>
      </TouchableOpacity>
      {!lastItem && (
        <Divider
          style={{
            width: '85%',
            alignSelf: 'flex-end',
            backgroundColor: '#C2C2C2',
          }}
        />
      )}
    </>
  );
};

IconInformationButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  image: PropTypes.string,
  lastItem: PropTypes.bool,
};

IconInformationButton.defaultProps = {
  name: '',
  value: '',
  image: '',
  lastItem: false,
};

export default IconInformationButton;
