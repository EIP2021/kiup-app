import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { clearError as clearErrorAction } from '../../actions';
import styles from './styles/ErrorMessageAlertStyle';

const ErrorMessageAlert = ({ error, clearError }) => {
  const [show, setShow] = useState(false);
  const [timeoutID, setTimeoutID] = useState(undefined);
  const ref = useRef();
  const transition = (
    <Transition.Sequence>
      <Transition.In type="slide-bottom" />
      <Transition.Out type="slide-bottom" />
    </Transition.Sequence>
  );
  useEffect(() => {
    if (!show && error) {
      ref.current.animateNextTransition();
      setShow(true);
      const id = setTimeout(() => {
        ref.current.animateNextTransition();
        setShow(false);
        clearError();
      }, 4000);
      setTimeoutID(id);
    }
  }, [error]);

  return (
    <Transitioning.View
      transition={transition}
      ref={ref}
      style={styles.transitionContainer}
    >
      {show && (
        <View style={styles.container}>
          <View style={styles.errorContainer}>
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
              setShow(false);
              ref.current.animateNextTransition();
              clearError();
            }}
          />
        </View>
      )}
    </Transitioning.View>
  );
};

ErrorMessageAlert.propTypes = {
  error: PropTypes.string,
  clearError: PropTypes.func,
};

ErrorMessageAlert.defaultProps = {
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
)(ErrorMessageAlert);
