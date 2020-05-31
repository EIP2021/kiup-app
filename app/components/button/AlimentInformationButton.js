import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/AlimentInformationButtonStyle';
import { images } from '../../themes';

const AlimentInformationButton = ({
  name,
  brand,
  date,
  value,
  image,
  lastItem,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image
              source={image ? { uri: image } : images.noPhoto}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={{ justifyContent: 'space-between' }}>
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.brand}>{brand}</Text>
              </View>
              <Text style={styles.date}>{date}</Text>
            </View>
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
            width: '97%',
            alignSelf: 'flex-end',
            backgroundColor: '#C2C2C2',
          }}
        />
      )}
    </>
  );
};

AlimentInformationButton.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.string,
  image: PropTypes.string,
  lastItem: PropTypes.bool,
  onPress: PropTypes.func,
};

AlimentInformationButton.defaultProps = {
  name: '',
  brand: '',
  date: '',
  value: '',
  image: '',
  lastItem: false,
  onPress: /* istanbul ignore next */ () => {},
};

export default AlimentInformationButton;
