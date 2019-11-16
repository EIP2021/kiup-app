import React, {
  Children,
  cloneElement,
  useState,
  useRef,
  useEffect,
} from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { moderateScale } from 'react-native-size-matters';
import { withNavigationFocus } from 'react-navigation';

import styles from './styles/CameraStyle';
import { colors } from '../../themes';

const Camera = ({ navigation, children, isFocused, ...props }) => {
  const [flashmode, setFlashMode] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!isFocused) {
      setFlashMode(false);
    }
    if (Platform.OS === 'android' && isFocused) {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    if (Platform.OS === 'android' && !isFocused) {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor(colors.primary);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {isFocused && (
        <RNCamera
          {...props}
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.preview}
          flashMode={
            flashmode
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: "Permission d'utiliser la camera",
            message:
              "Nous avons besoin de votre permision afin d'utiliser la camera",
            buttonPositive: 'Accepter',
            buttonNegative: 'Refuser',
          }}
        />
      )}
      <Icon
        name={flashmode ? 'flash-off' : 'flash'}
        color="black"
        size={moderateScale(16)}
        type="material-community"
        raised
        containerStyle={styles.iconContainer}
        iconStyle={{ paddingLeft: 2 }}
        onPress={() => setFlashMode(!flashmode)}
      />
      {Children.map(children, child => {
        return cloneElement(child);
      })}
    </View>
  );
};

Camera.propTypes = {
  navigation: PropTypes.object.isRequired,
  children: PropTypes.node,
  isFocused: PropTypes.bool,
};

Camera.defaultProps = {
  children: undefined,
  isFocused: false,
};

export default withNavigationFocus(Camera);
