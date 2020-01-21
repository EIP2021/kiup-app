import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Camera } from '../../components';
import { getPendingStatus } from '../../selectors';
import { getScannedProduct } from '../../requests';
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
          <View style={styles.barcode} />
          <Button title="TEST" onPress={() => scanProduct('7613036012249')} />
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
  pending: getPendingStatus(state, 'scan'),
});

const mapDispatchToProps = dispatch => {
  return {
    scanProduct: barcode => {
      console.log(barcode);
      dispatch(getScannedProduct(barcode));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScannerScreen);
