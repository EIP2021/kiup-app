import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';

import { updateData, DELETE_DATA, UPDATE_DATA } from '../../../actions';
import { calculAllNutrimentsQuantity } from '../../../helpers';
import {
  ProductHeader,
  NutrimentsDiagram,
  Separator,
  TitleField,
  CustomButton,
  RowInputButton,
} from '../../../components';
import { colors } from '../../../themes';
import styles from './styles/ConsumptionDetailsStyle';

const ConsumptionDetails = ({
  onSubmit,
  deleteConsumption,
  nutrimentsConsumed,
  quantity,
  title,
  brand,
  image,
}) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);

  return (
    <View style={styles.container}>
      <ProductHeader title={title} brand={brand} image={image} />
      <Separator />
      <TitleField
        title="Nutriments consommés"
        titleStyle={styles.diagramTitle}
      />
      <NutrimentsDiagram nutriments={nutrimentsConsumed} />
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
            value: inputQuantity,
            unit: 'g',
            onChange: setInputQuantity,
          }}
          buttonProps={{
            title: 'Modifier',
            onPress: () => onSubmit(inputQuantity, quantity),
          }}
        />
        <CustomButton
          iconName="trash-alt"
          title="Supprimer"
          primaryColour={colors.error}
          secondaryColour={colors.secondary}
          onPress={deleteConsumption}
        />
      </View>
    </View>
  );
};

ConsumptionDetails.propTypes = {
  deleteConsumption: PropTypes.func,
  onSubmit: PropTypes.func,
  nutrimentsConsumed: PropTypes.object,
  quantity: PropTypes.number,
  title: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
};

ConsumptionDetails.defaultProps = {
  deleteConsumption: /* istanbul ignore next */ () => {},
  onSubmit: /* istanbul ignore next */ () => {},
  nutrimentsConsumed: {},
  quantity: 0,
  title: '',
  brand: '',
  image: '',
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { index, closeModal } = ownProps;
  return {
    deleteConsumption: () => {
      dispatch(updateData('consumptionHistory', { index }, DELETE_DATA));
      closeModal();
    },
    onSubmit: (inputQuantity, defaultQuantity) => {
      if (inputQuantity === defaultQuantity) {
        closeModal();
        return;
      }
      const stats = calculAllNutrimentsQuantity(
        inputQuantity,
        ownProps.nutriments
      );
      dispatch(
        updateData(
          'consumptionHistory',
          {
            quantity: inputQuantity,
            nutrimentsConsumed: stats,
          },
          UPDATE_DATA,
          { index }
        )
      );
      closeModal();
    },
  };
};

export default connect(null, mapDispatchToProps)(ConsumptionDetails);
