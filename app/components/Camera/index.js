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

import styles from './styles/CameraStyle';
import { colors } from '../../themes';

const Camera = ({ navigation, children, ...props }) => {
  const [flashmode, setFlashMode] = useState(false);
  const [focused, setFocused] = useState(true);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    const didFocusSubscription = navigation.addListener('willFocus', () => {
      setFocused(true);
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
      }
    });
    const didBlurSubscription = navigation.addListener('willBlur', () => {
      setFocused(false);
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor(colors.primary);
      }
      setFlashMode(false);
    });
    return () => {
      didFocusSubscription.remove();
      didBlurSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {focused && (
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
};

Camera.defaultProps = {
  children: undefined,
};

export default Camera;
