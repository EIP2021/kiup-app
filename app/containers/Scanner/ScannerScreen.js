import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { scan } from '../../actions';
import { Camera } from '../../components';
import { getPendingStatus } from '../../selectors';
import styles from './styles/ScannerScreenStyle';
import { handleStatusBar } from '../../helpers';

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
  scanProduct: () => {},
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

const enhance = compose(
  handleStatusBar('light-content', 'transparent', false),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ScannerScreen);
