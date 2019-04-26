import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Places from './views/Places';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import FunFacts from './views/FunFacts';
import Contact from './views/Contact';

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/funfacts" component={FunFacts} />
      <Route path="/traveling" component={Places} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
