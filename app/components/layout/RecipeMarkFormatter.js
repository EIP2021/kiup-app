import React from 'react';
import PropTypes from 'prop-types';
import TextWithLogo from './TextWithLogo';

const RecipeMarkFormatter = ({ mark }) => {
  let label = '';
  let color = '';
  let logo = '';

  if (mark >= 4.5 && mark <= 5) {
    color = 'primary';
    label = `${mark} Excellent`;
    logo = 'excellentRatingStar';
  } else if (mark >= 3.5 && mark < 4.5) {
    color = 'very_good_rating';
    label = `${mark} Très bon`;
    logo = 'veryGoodRatingStar';
  } else if (mark >= 2.5 && mark < 3.5) {
    color = 'good_rating';
    label = `${mark} Bon`;
    logo = 'goodRatingStar';
  } else if (mark >= 1.5 && mark < 2.5) {
    color = 'bad_rating';
    label = `${mark} Passable`;
    logo = 'badRatingStar';
  } else if (mark >= 0 && mark < 1.5) {
    color = 'very_bad_rating';
    label = `${mark} Mauvais`;
    logo = 'veryBadRatingStar';
  }

  return (
    <TextWithLogo text={label} textColor={color} logo={logo} isLogoBefore />
  );
};

RecipeMarkFormatter.propTypes = {
  mark: PropTypes.number,
};

RecipeMarkFormatter.defaultProps = {
  mark: 3.5,
};

export default RecipeMarkFormatter;
