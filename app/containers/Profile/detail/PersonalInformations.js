import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NavigateInformationButton } from '../../../components';
import styles from './styles/PersonalInformationsStyle';

const personalInformations = [
  { dataName: 'firstName', title: 'Prenom', keyboardType: 'default' },
  { dataName: 'lastName', title: 'Nom', keyboardType: 'default' },
  {
    dataName: 'birthdate',
    title: 'Date de naissance',
    keyboardType: 'default',
  },
  { dataName: 'gender', title: 'Genre', keyboardType: 'default' },
  { dataName: 'weight', title: 'Poids', keyboardType: 'numeric' },
];

const PersonalInformations = ({ modifySetting, informations }) => {
  return (
    <View style={styles.container}>
      {personalInformations.map((data, index) => {
        return (
          <NavigateInformationButton
            key={data.title}
            name={data.title}
            value={informations[data.dataName]}
            lastItem={index === personalInformations.length - 1}
            onPress={() =>
              modifySetting(
                data.dataName,
                informations[data.dataName],
                data.keyboardType
              )
            }
          />
        );
      })}
    </View>
  );
};

PersonalInformations.propTypes = {
  modifySetting: PropTypes.func,
  informations: PropTypes.object,
};

PersonalInformations.defaultProps = {
  modifySetting: /* istanbul ignore next */ () => {},
  informations: {},
};

const mapStateToProps = state => {
  return {
    informations: state.profileInformations,
  };
};

export default connect(mapStateToProps)(PersonalInformations);
