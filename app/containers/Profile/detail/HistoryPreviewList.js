import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { IconInformationButton, FullWidthButton } from '../../../components';

const HistoryPreviewList = ({ historyPreview, navigation }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ height: 1, backgroundColor: '#c2c2c2' }} />
      {historyPreview.map((data, index) => {
        return (
          <IconInformationButton
            key={index}
            name={data.title}
            value={`${data.quantity} g`}
            image={data.image}
            lastItem={index + 1 === historyPreview.length}
          />
        );
      })}
      <FullWidthButton
        title="Afficher plus d'aliments"
        onPress={() => {
          navigation.navigate('History');
        }}
      />
    </View>
  );
};

HistoryPreviewList.propTypes = {
  historyPreview: PropTypes.array,
  navigation: PropTypes.object,
};

HistoryPreviewList.defaultProps = {
  historyPreview: [],
  navigation: /* istanbul ignore next */ () => {},
};

const mapDispatchToProps = state => {
  return {
    historyPreview: state.consumptionHistory.data.slice(0, 3),
  };
};

export default connect(mapDispatchToProps)(HistoryPreviewList);
