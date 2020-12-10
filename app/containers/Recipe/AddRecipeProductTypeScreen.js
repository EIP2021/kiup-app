import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';
import { BasicButton } from '../../components/button';
import { colors } from '../../themes';

const AddRecipeProductTypeScreen = ({ onSubmit, navigation }) => {
  const [value, onChangeText] = React.useState('');
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <TextInput
        placeholder="Une cuillère d'huile"
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{
          marginBottom: moderateScale(30),
          borderColor: colors.light_grey,
          borderWidth: moderateScale(1),
          borderRadius: moderateScale(4),
          width: '80%',
          padding: moderateScale(10),
        }}
      />
      <BasicButton
        variant="secondary"
        title="Ajouter"
        onPress={() => onSubmit(value, navigation.state.params, navigation)}
      />
    </View>
  );
};

AddRecipeProductTypeScreen.propTypes = {
  onSubmit: PropTypes.func,
  navigation: PropTypes.object,
};

AddRecipeProductTypeScreen.defaultProps = {
  onSubmit: PropTypes.func,
  navigation: {},
};

const mapDispatchToProps = () => {
  return {
    onSubmit: (value, fields, navigation) => {
      fields.push({
        id: fields.length,
        title: value,
      });
      navigation.goBack();
    },
  };
};

export default connect(null, mapDispatchToProps)(AddRecipeProductTypeScreen);
