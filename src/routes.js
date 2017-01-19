import React from 'react';
import { Router, Route } from 'react-router';

import LandingPage from './containers/LandingPage';
import GamePage from './containers/GamePage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={LandingPage} />
    <Route path="/game" component={GamePage} />
  </Router>
);

export default Routes;
