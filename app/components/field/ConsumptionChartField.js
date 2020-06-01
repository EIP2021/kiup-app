import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Grid, BarChart, XAxis, YAxis } from 'react-native-svg-charts';
import { Line } from 'react-native-svg';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as scale from 'd3-scale';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../themes';
import { getFirstWeekOfMonth } from '../../helpers';
import styles from './styles/ConsumptionChartFieldStyle';
import TitleField from './TitleField';

const MaximumLine = ({ y, maximumValue }) => (
  <Line
    key="zero-axis"
    x1="0%"
    x2="100%"
    y1={y(maximumValue)}
    y2={y(maximumValue)}
    stroke={colors.error}
    strokeDasharray={[8, 8]}
    strokeWidth={2}
  />
);

MaximumLine.propTypes = {
  y: PropTypes.func,
  maximumValue: PropTypes.number,
};

MaximumLine.defaultProps = {
  y: /* istanbul ignore next */ () => {},
  maximumValue: 0,
};

const ConsumptionChartField = ({ data, type, max, maxGrid, title, color }) => {
  const weekdays =
    type === 'weekly'
      ? ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
      : getFirstWeekOfMonth();
  const verticalContentInset = { top: 5, bottom: 5 };
  const axesSvg = { fontSize: moderateScale(12), fill: colors.disable_text };

  return (
    <View style={styles.container}>
      <TitleField title={title} titleStyle={styles.title} />
      <View style={styles.chartContainer}>
        <YAxis
          data={data}
          style={styles.yAxis}
          contentInset={verticalContentInset}
          svg={axesSvg}
          numberOfTicks={5}
          min={0}
          max={maxGrid}
        />
        <View style={styles.charColumnContainer}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: color, fillOpacity: 0.8 }}
            spacing={0.2}
            gridMin={0}
            gridMax={maxGrid}
            numberOfTicks={5}
            animate={false}
            contentInset={verticalContentInset}
          >
            <Grid
              direction={Grid.Direction.HORIZONTAL}
              svg={{
                strokeDasharray: [8, 8],
                strokeWidth: 1,
                strokeOpacity: 0.8,
              }}
            />
            <MaximumLine maximumValue={max} />
          </BarChart>
          <XAxis
            style={styles.xAxis}
            data={data}
            scale={scale.scaleBand}
            formatLabel={
              type === 'weekly'
                ? (value, index) => weekdays[index]
                : (value, index) => weekdays[index % 7].charAt(0)
            }
            svg={axesSvg}
          />
        </View>
      </View>
    </View>
  );
};

ConsumptionChartField.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  max: PropTypes.number,
  maxGrid: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
};

ConsumptionChartField.defaultProps = {
  data: [],
  type: '',
  max: 0,
  maxGrid: 0,
  title: '',
  color: '',
};

export default ConsumptionChartField;
