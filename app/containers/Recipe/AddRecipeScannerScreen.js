import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPendingStatus } from '../../selectors';
import { Camera, CustomModal } from '../../components';
import { getRecipeScannedProduct } from '../../requests';
import { isObjectEmpty } from '../../helpers';
import AddRecipeProductDetails from './detail/AddRecipeProductDetails';
import styles from './styles/AddRecipeScannerScreenStyle';

const AddRecipeScannerScreen = ({
  navigation,
  scanProduct,
  pending,
  product,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  React.useEffect(() => {
    if (pending === false && isObjectEmpty(product) === false) {
      setIsModalOpen(true);
    }
  }, [pending]);
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
          <Button title="TEST" onPress={() => scanProduct('8076808060654')} />
        </View>
      </Camera>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backdropOpacity={0}
      >
        <AddRecipeProductDetails
          {...product}
          fields={navigation.state.params}
        />
      </CustomModal>
    </View>
  );
};

AddRecipeScannerScreen.propTypes = {
  navigation: PropTypes.object,
  scanProduct: PropTypes.func,
  pending: PropTypes.bool,
  product: PropTypes.object,
};

AddRecipeScannerScreen.defaultProps = {
  navigation: {},
  scanProduct: /* istanbul ignore next */ () => {},
  pending: false,
  product: {},
};

const mapStateToProps = state => ({
  pending: getPendingStatus(state, 'recipeProductScanned'),
  product: state.recipeProductScanned,
});

const mapDispatchToProps = dispatch => {
  return {
    scanProduct: barcode => {
      dispatch(getRecipeScannedProduct(barcode));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRecipeScannerScreen);
