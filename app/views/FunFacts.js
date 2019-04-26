import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/FunFacts/Personal';


const FunFacts = () => (
  <Main>
    <Helmet title="Fun Facts" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/funfacts">Fun Facts</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
);

export default FunFacts;
