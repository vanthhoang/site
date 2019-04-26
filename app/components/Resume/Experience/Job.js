import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3>{data.positionCompany}</h3>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <u>{data.project}</u>
    <ul className="points">
      {data.points.map(point => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    positionCompany: PropTypes.string.isRequired,
    // position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    // projects: PropTypes.arrayOf(ProTypes.string).isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
