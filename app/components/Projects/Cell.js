import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data/projects';


const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
      </header>
      <a href={data.link} className="image"><img src={`${BASE_PATH}${data.image}`} alt="" /></a>
      <br/><br/><br/>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
