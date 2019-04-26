import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/profilePic.jpg`} alt="" />
      </Link>
      <header>
        <h2>Van Hoang</h2>
        <p><a href="mailto:vanthhohoang@gmail.com">vanthhohoang@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, My name is Van. I am currently a software engineer at Optum Technology, UnitedHealth Group. I graduated from the University of Maryland, College Park. I love to travel and be active. I have been to 21 countries and aim to reach 50 before turning 30 :)  
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
