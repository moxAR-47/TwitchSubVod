import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DeletedClips from './pages/DeletedClips';
import Home from './pages/Home';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/DeletedClips">
        <DeletedClips />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
