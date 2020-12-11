import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';

import { updateData, CREATE_DATA, clearData } from '../../../actions';
import { postConsumption } from '../../../requests';
import { calculAllNutrimentsQuantity, generateID } from '../../../helpers';
import { ProductHeader, Separator, RowInputButton } from '../../../components';
import styles from './styles/ProductDetailsStyle';
import NutrimentsHeaderBar from './NutrimentsHeaderBar';
import NutrimentsInfo from './NutrimentsInfo';

const ProductDetails = ({ onSubmit, nutriments, title, brand, image }) => {
  const [inputQuantity, setInputQuantity] = React.useState('0');
  console.log(nutriments);
  return (
    <View style={styles.container}>
      <ProductHeader title={title} brand={brand} image={image} />
      <Separator />
      <NutrimentsHeaderBar />
      <NutrimentsInfo nutriments={nutriments} />
      <Separator />
      <View
        style={{
          alignItems: 'center',
          marginVertical: moderateScale(10),
          marginTop: moderateScale(16),
        }}
      >
        <RowInputButton
          inputProps={{
            placeholder: '0',
            value: inputQuantity,
            unit: 'g',
            onChange: setInputQuantity,
          }}
          buttonProps={{
            title: 'Consommer',
            onPress: () => onSubmit(inputQuantity),
          }}
        />
      </View>
    </View>
  );
};

ProductDetails.propTypes = {
  onSubmit: PropTypes.func,
  nutriments: PropTypes.object,
  title: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
};

ProductDetails.defaultProps = {
  onSubmit: /* istanbul ignore next */ () => {},
  nutriments: {},
  title: '',
  brand: '',
  image: '',
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { closeModal, nutriments, title, image, brand } = ownProps;
  return {
    onSubmit: inputQuantity => {
      const quantity = Number(inputQuantity);
      if (!quantity) {
        return;
      }
      const stats = calculAllNutrimentsQuantity(quantity, nutriments);
      const history = {
        id: generateID(),
        title,
        image,
        brand,
        date: new Date(),
        nutriments,
        nutrimentsConsumed: stats,
        quantity,
      };
      dispatch(updateData('consumptionHistory', history, CREATE_DATA));
      dispatch(postConsumption(stats));
      closeModal();
      clearData();
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
