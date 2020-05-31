import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import styles from './styles/CustomModal';
import { isObjectEmpty } from '../../helpers';

const animationSpeed = 500;

const CustomModal = ({ isOpen, onClose, children, modalStyle, ...props }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  useEffect(() => {
    if (isVisible !== isOpen) {
      setIsVisible(isOpen);
    }
  }, [isOpen]);
  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };
  return (
    <Modal
      avoidKeyboard
      isVisible={isVisible}
      style={isObjectEmpty(modalStyle) ? styles.modal : modalStyle}
      onBackdropPress={closeModal}
      animationInTiming={animationSpeed}
      animationOutTiming={animationSpeed}
      backdropTransitionInTiming={animationSpeed}
      backdropTransitionOutTiming={animationSpeed}
      {...props}
    >
      {React.cloneElement(children, { closeModal })}
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
  modalStyle: PropTypes.object,
};

CustomModal.defaultProps = {
  isOpen: false,
  onClose: /* istanbul ignore next */ () => {},
  modalStyle: {},
};

export default CustomModal;
