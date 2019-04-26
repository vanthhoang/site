import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';


import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Education from '../components/Resume/Education';
//import Testing from '../components/Resume/Testing';


import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
//import test from'../data/resume/test';
import skills from '../data/resume/skills';

const sections = [
  'Experience',
  'Skills',
  'Education'
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map(sec => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Experience data={positions} />
      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <SkillTest /> */}
      <Skills data = {skills}/>
      <br></br>
      <Education data={degrees} />

    </article>
  </Main>
);

export default Resume;
