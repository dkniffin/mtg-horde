import React from 'react';
import { Router, Route } from 'react-router';

import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={LandingPage} />
    <Route path="/game" component={GamePage} />
  </Router>
);

export default Routes;
