import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';

import { updateData, CREATE_DATA, clearData } from '../../../actions';
import { postConsumption } from '../../../requests';
import { calculAllNutrimentsQuantity } from '../../../helpers';
import { ProductHeader, Separator, RowInputButton } from '../../../components';
import styles from './styles/AddRecipeProductDetailsStyle';
import AddRecipeNutrimentsHeaderBar from './AddRecipeNutrimentsHeaderBar';
import AddRecipeNutrimentsInfo from './AddRecipeNutrimentsInfo';

const AddRecipeProductDetails = ({
  onSubmit,
  nutriments,
  title,
  brand,
  image,
  fields,
}) => {
  const [inputQuantity, setInputQuantity] = React.useState(0);
  return (
    <View style={styles.container}>
      <ProductHeader title={title} brand={brand} image={image} />
      <Separator />
      <AddRecipeNutrimentsHeaderBar />
      <AddRecipeNutrimentsInfo nutriments={nutriments} />
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
            title: 'Ajouter',
            onPress: () => onSubmit(inputQuantity, fields),
          }}
        />
      </View>
    </View>
  );
};

AddRecipeProductDetails.propTypes = {
  onSubmit: PropTypes.func,
  nutriments: PropTypes.object,
  title: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  fields: PropTypes.object,
};

AddRecipeProductDetails.defaultProps = {
  onSubmit: /* istanbul ignore next */ () => {},
  nutriments: {},
  title: '',
  brand: '',
  image: '',
  fields: {},
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { closeModal, nutriments, id, title, image, brand } = ownProps;
  return {
    onSubmit: (inputQuantity, fields) => {
      if (!inputQuantity) {
        return;
      }
      const stats = calculAllNutrimentsQuantity(inputQuantity, nutriments);
      const product = {
        id,
        title,
        image,
        brand,
        date: new Date(),
        nutriments,
        nutrimentsConsumed: stats,
        quantity: inputQuantity,
      };
      //dispatch(updateData('consumptionHistory', history, CREATE_DATA));
      //dispatch(postConsumption(stats));
      fields.push(product);
      closeModal();
      clearData();
    },
  };
};

export default connect(null, mapDispatchToProps)(AddRecipeProductDetails);
