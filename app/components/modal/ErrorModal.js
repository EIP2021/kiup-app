import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';

import { clearError as clearErrorAction } from '../../actions';
import styles from './styles/ErrorModalStyle';

const ErrorModal = ({ error, clearError }) => {
  const [open, setOpen] = useState(false);
  const [timeoutID, setTimeoutID] = useState(undefined);

  useEffect(() => {
    if (error) {
      setOpen(true);
      const id = setTimeout(() => {
        setOpen(false);
        clearError();
      }, 4000);
      setTimeoutID(id);
    }
  }, [error]);

  return (
    <Modal
      isVisible={open}
      animationInTiming={800}
      animationOutTiming={2000}
      backdropOpacity={0}
      style={styles.modal}
      hasBackdrop={false}
      coverScreen={false}
      avoidKeyboard
      onBackButtonPress={() => {
        clearTimeout(timeoutID);
        setOpen(false);
        clearError();
      }}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.errorText}>
            <Text style={styles.errorTitle}>Erreur: </Text>
            {error}
          </Text>
        </View>
        <Icon
          name="close"
          size={moderateScale(17)}
          color="rgba(0,0,0,0.6)"
          onPress={() => {
            clearTimeout(timeoutID);
            setOpen(false);
            clearError();
          }}
        />
      </View>
    </Modal>
  );
};

ErrorModal.propTypes = {
  error: PropTypes.string,
  clearError: PropTypes.func,
};

ErrorModal.defaultProps = {
  error: '',
  clearError: /* istanbul ignore next */ () => {},
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = {
  clearError: clearErrorAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);
