import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data/traveling';


const Traveling = ({ data }) => (
  <div className="traveling-container">
    <article className="mini-post">
      <header>
        <h3>{data.continent}</h3>
        <p> {data.countries}</p>
      </header>
      <a href={data.link} className="image"><img src={`${BASE_PATH}${data.image}`} alt="" /></a>
      {/* <br/><br/><br/> */}
      {/* <div className="description">
        <p>{data.desc}</p>
      </div> */}
    </article>
  </div>
);

Traveling.propTypes = {
  data: PropTypes.shape({
    continent: PropTypes.string.isRequired,
    coutries: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Traveling;