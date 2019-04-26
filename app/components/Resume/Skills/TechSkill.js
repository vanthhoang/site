import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const TechSkill = ({ data }) => (
  <article className="skill-container">
    <header>
      <h3>{data.category}</h3>
    </header>
    <span className="skill-name">
      {data.names.map(name => (
        <Chip className='mui-chip' label={name} />
      ))}
    </span>
  </article>
);

TechSkill.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


export default TechSkill;