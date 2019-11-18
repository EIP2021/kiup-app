import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { scan } from '../../actions';
import { Camera } from '../../components';
import { getPendingStatus } from '../../selectors';
import styles from './styles/ScannerScreenStyle';

const ScannerScreen = ({ navigation, scanProduct, pending }) => {
  return (
    <View style={{ flex: 1 }}>
      <Camera
        navigation={navigation}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          if (!pending && barcodes && barcodes.length) {
            scanProduct(barcodes[0].data);
          }
        }}
      >
        <View style={styles.barcodeContainer}>
          <Button title="lol" onPress={() => scanProduct('3387390406849')} />
          <View style={styles.barcode} />
        </View>
      </Camera>
    </View>
  );
};

ScannerScreen.propTypes = {
  navigation: PropTypes.object,
  scanProduct: PropTypes.func,
  pending: PropTypes.bool,
};

ScannerScreen.defaultProps = {
  navigation: {},
  scanProduct: /* istanbul ignore next */ () => {},
  pending: false,
};

const mapStateToProps = state => ({
  pending: getPendingStatus(state),
});

const mapDispatchToProps = dispatch => {
  return {
    scanProduct: barcode => {
      dispatch(scan(barcode));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScannerScreen);
