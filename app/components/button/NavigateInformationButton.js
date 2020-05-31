import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

import styles from './styles/NavigateInformationButtonStyle';
import { colors } from '../../themes';

const NavigateInformationButton = ({
  name,
  value,
  hideValue,
  lastItem,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.leftText}>{name}</Text>
          </View>
          <View style={styles.rightContainer}>
            {!hideValue && <Text style={styles.rightText}>{value}</Text>}
            <Icon
              name="chevron-right"
              color={colors.disable_text}
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
            backgroundColor: colors.separator,
          }}
        />
      )}
    </>
  );
};

NavigateInformationButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  hideValue: PropTypes.bool,
  lastItem: PropTypes.bool,
  onPress: PropTypes.func,
};

NavigateInformationButton.defaultProps = {
  name: '',
  value: '',
  hideValue: false,
  lastItem: false,
  onPress: /* istanbul ignore next */ () => {},
};

export default NavigateInformationButton;
