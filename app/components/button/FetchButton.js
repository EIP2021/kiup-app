import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BasicButton from './BasicButton';
import { getPendingStatus } from '../../selectors';

const FetchButton = ({ loading, ...props }) => {
  return <BasicButton loading={loading} {...props} />;
};

FetchButton.propTypes = {
  loading: PropTypes.bool,
};

FetchButton.defaultProps = {
  loading: false,
};

const mapStateToProps = state => {
  return {
    loading: getPendingStatus(state),
  };
};

export default connect(mapStateToProps)(FetchButton);
