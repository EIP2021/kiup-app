import React from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

import { ConsumptionCard, CustomModal } from '../../../components';
import ConsumptionDetails from './ConsumptionDetails';

const HistoryList = ({ history }) => {
  const [consumption, setConsumption] = React.useState({});
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  moment().locale('fr');
  return (
    <>
      <FlatList
        style={{
          marginBottom: 20,
          paddingVertical: moderateScale(4),
        }}
        data={history}
        renderItem={({ item, index }) => (
          <ConsumptionCard
            key={item.id}
            name={item.title}
            brand={item.brand}
            date={moment(item.date).fromNow()}
            quantity={`${item.quantity} g`}
            image={item.image}
            onPress={() => {
              setConsumption({ ...item, index });
              setModalIsOpen(true);
            }}
          />
        )}
      />
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ConsumptionDetails {...consumption} />
      </CustomModal>
    </>
  );
};

HistoryList.propTypes = {
  history: PropTypes.array,
  navigation: PropTypes.object,
};

HistoryList.defaultProps = {
  history: [],
  navigation: {},
};

const mapDispatchToProps = state => {
  return {
    history: state.consumptionHistory.data,
  };
};

export default connect(mapDispatchToProps)(HistoryList);
