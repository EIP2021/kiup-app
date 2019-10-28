import React, {
  Children,
  cloneElement,
  useState,
  useRef,
  useEffect,
} from 'react';
import { View, StatusBar, Platform, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { moderateScale } from 'react-native-size-matters';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

import styles from './styles/CameraStyle';
import { colors } from '../../themes';

const checkPermission = response => {
  switch (response) {
    case RESULTS.UNAVAILABLE:
      Alert.alert(
        'Aucune camera disponible',
        "Afin de pouvoir utiliser l'application une camera est necessaire."
      );
      break;
    case RESULTS.BLOCKED:
      Alert.alert(
        'Camera non autoriser',
        "Afin de pouvoir utiliser l'application a besoin d'acceder a votre camera."
      );
      break;
    default:
      break;
  }
};

const Camera = ({ navigation, children, ...props }) => {
  const [flashmode, setFlashMode] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    const didFocusSubscription = navigation.addListener('willFocus', () => {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    });
    const didBlurSubscription = navigation.addListener('willBlur', () => {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor(colors.primary);
      setFlashMode(false);
    });
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.CAMERA).then(checkPermission);
    } else {
      check(PERMISSIONS.IOS.CAMERA).then(checkPermission);
    }
    return () => {
      didFocusSubscription.remove();
      didBlurSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
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
