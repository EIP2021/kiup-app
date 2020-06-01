import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { ConsumptionChartField } from '../../../components';
import { colors } from '../../../themes';
import styles from './styles/ConsumptionChartSwiperStyle';

const ConsumptionChartSwiper = ({ nutrimentsStats, type }) => {
  return (
    <View>
      <SwiperFlatList
        showPagination
        paginationActiveColor={colors.primary}
        paginationDefaultColor={colors.disable_text}
        paginationStyleItem={styles.paginationDot}
      >
        <View style={styles.child}>
          <ConsumptionChartField
            data={nutrimentsStats.proteins}
            max={60}
            maxGrid={80}
            type={type}
            color={colors.protein}
            title="Consommation de proteines"
          />
        </View>
        <View style={styles.child}>
          <ConsumptionChartField
            data={nutrimentsStats.salt}
            max={5}
            maxGrid={8}
            type={type}
            color={colors.sodium}
            title="Consommation de sel"
          />
        </View>
        <View style={styles.child}>
          <ConsumptionChartField
            data={nutrimentsStats.phosphorus}
            max={1000}
            maxGrid={1200}
            type={type}
            color={colors.phosphorus}
            title="Consommation de phosphore"
          />
        </View>
        <View style={styles.child}>
          <ConsumptionChartField
            data={nutrimentsStats.potassium}
            max={600}
            maxGrid={800}
            type={type}
            color={colors.potassium}
            title="Consommation de potassium"
          />
        </View>
      </SwiperFlatList>
      <View style={styles.bottomContainer} />
    </View>
  );
};

ConsumptionChartSwiper.propTypes = {
  nutrimentsStats: PropTypes.object,
  type: PropTypes.string,
};

ConsumptionChartSwiper.defaultProps = {
  nutrimentsStats: {},
  type: '',
};

export default ConsumptionChartSwiper;
