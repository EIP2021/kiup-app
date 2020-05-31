import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import styles from './styles/ConsumptionScreenStyle';
import { calculAllNutrimentsQuantity } from '../../helpers';
import { updateData, DELETE_DATA, UPDATE_DATA, navigate } from '../../actions';
import {
  BasicButton,
  BasicInput,
  TitleField,
  HeaderWithImage,
  FavoriteButton,
  NutrimentsDiagram,
} from '../../components';

const ConsumptionScreen = ({ navigation, deleteConsumption, handleSubmit }) => {
  const nutriments = navigation.getParam('nutrimentsConsumed');
  return (
    <View style={styles.container}>
      <TitleField title="Nutriments consommés" titleStyle={styles.title} />
      <NutrimentsDiagram nutriments={nutriments} />
      <View style={styles.form}>
        <Field
          name="quantity"
          placeholder={`${navigation.getParam('quantity')} g`}
          returnKeyType="send"
          keyboardType="numeric"
          containerStyle={{ width: '100%', paddingHorizontal: '5%' }}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          component={BasicInput}
          placeholderTextColor="rgb(130, 130, 130)"
          onSubmitEditingEditing={handleSubmit}
        />
        <View style={styles.buttons}>
          <BasicButton
            title="Modifier"
            variant="secondary"
            onPress={handleSubmit}
            buttonStyle={styles.modifyButton}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.modifyButtonTitle}
          />
          <BasicButton
            title="Supprimer"
            variant="secondary"
            onPress={deleteConsumption}
            buttonStyle={[styles.deleteButton]}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.deleteButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

ConsumptionScreen.propTypes = {
  navigation: PropTypes.object,
  deleteConsumption: PropTypes.func,
  handleSubmit: PropTypes.func,
};

ConsumptionScreen.defaultProps = {
  navigation: {},
  deleteConsumption: /* istanbul ignore next */ () => {},
  handleSubmit: /* istanbul ignore next */ () => {},
};

ConsumptionScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  const quantity = navigation.getParam('quantity');
  const image = navigation.getParam('image');
  return {
    headerTitle: (
      <HeaderWithImage image={image} title={`${title} - ${quantity} g`} />
    ),
    headerRight: <FavoriteButton iconStyle={styles.headerRight} />,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const index = ownProps.navigation.getParam('index');
  return {
    deleteConsumption: () => {
      dispatch(updateData('consumptionHistory', { index }, DELETE_DATA));
      dispatch(navigate('History'));
    },
    onSubmit: values => {
      if (!values.quantity) {
        dispatch(navigate('History'));
        return;
      }
      const stats = calculAllNutrimentsQuantity(
        values.quantity,
        ownProps.navigation.getParam('nutriments')
      );
      dispatch(
        updateData(
          'consumptionHistory',
          {
            quantity: values.quantity,
            nutrimentsConsumed: stats,
          },
          UPDATE_DATA,
          { index }
        )
      );
      dispatch(navigate('History'));
    },
  };
};

const enhance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({ form: 'consumption' })
);

export default enhance(ConsumptionScreen);
