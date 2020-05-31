import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  DatePickerAndroid,
  DatePickerIOS,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles/DateInputStyle';
import { colors } from '../../themes';

const openDatePickerAndroid = async (date, setDate) => {
  const { action, year, month, day } = await DatePickerAndroid.open({
    date: (date && new Date(date)) || new Date('2000-01-01'),
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01'),
    mode: 'spinner',
  });
  if (action !== DatePickerAndroid.dismissedAction) {
    setDate(moment([year, month, day]).format('YYYY-MM-DD'));
  }
};

const ShowDatePickerIOS = ({ show, setShow, setDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  if (!show) {
    return null;
  }

  return (
    <View style={styles.datePickerIOSContainer}>
      <View style={styles.datePickerIOSBorder}>
        <TouchableOpacity onPress={() => setShow(false)}>
          <Text style={styles.datePickerIOSBorderText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShow(false);
            setDate(moment(currentDate).format('YYYY-MM-DD'));
          }}
        >
          <Text style={styles.datePickerIOSBorderText}>Valider</Text>
        </TouchableOpacity>
      </View>
      <DatePickerIOS
        style={styles.datePickerIOS}
        date={currentDate}
        initialDate={new Date(currentDate || '2000-01-01')}
        minimumDate={new Date('1900-01-01')}
        maximumDate={new Date('2020-01-01')}
        mode="date"
        onDateChange={newDate => setCurrentDate(newDate)}
      />
    </View>
  );
};

ShowDatePickerIOS.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  setDate: PropTypes.func,
};

ShowDatePickerIOS.defaultProps = {
  show: '',
  setShow: /* istanbull ignore next */ () => {},
  setDate: /* istanbull ignore next */ () => {},
};

const DateInput = ({
  input: { onChange },
  meta: { error, submitFailed },
  placeholder,
  showError,
  textContainerStyle,
  textStyle,
}) => {
  const [date, setDate] = useState('');
  const [openIOS, setOpenIOS] = useState(false);
  const textContainerStyleVariant =
    showError && submitFailed && error
      ? [
          styles.textContainer,
          textContainerStyle,
          { borderColor: colors.error },
        ]
      : [styles.textContainer, textContainerStyle];
  const textStyleVariant =
    showError && submitFailed && error
      ? [styles.text, textStyle, { color: colors.error }]
      : [styles.text, textStyle];

  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={textContainerStyleVariant}
          onPress={() => {
            if (Platform.OS === 'ios') {
              setOpenIOS(true);
            } else {
              openDatePickerAndroid(date, setDate);
            }
          }}
        >
          <Text style={textStyleVariant}>
            {(date && moment(date).format('DD/MM/YYYY')) || placeholder}
          </Text>
        </TouchableOpacity>
        {showError && submitFailed && error && (
          <Text style={styles.errorStyle}>{error}</Text>
        )}
      </View>
      <ShowDatePickerIOS
        show={openIOS}
        setShow={setOpenIOS}
        date={date}
        setDate={setDate}
      />
    </>
  );
};

DateInput.propTypes = {
  input: PropTypes.object,
  textContainerStyle: PropTypes.object,
  textStyle: Text.propTypes.style,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
};

DateInput.defaultProps = {
  input: {},
  textContainerStyle: {},
  textStyle: {},
  meta: {},
  placeholder: '',
  showError: false,
};

export default DateInput;
