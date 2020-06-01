import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RecipeBasicButton from './RecipeBasicButton';
import { getPendingStatus } from '../../selectors';

const FetchButton = ({ loading, type, ...props }) => {
  return <RecipeBasicButton loading={loading} {...props} />;
};

FetchButton.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

FetchButton.defaultProps = {
  loading: false,
};

const mapStateToProps = (state, ownProps) => {
  return {
    loading: getPendingStatus(state, ownProps.type),
  };
};

export default connect(mapStateToProps)(FetchButton);
