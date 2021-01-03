import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DeletedClips from './pages/DeletedClips';
import DeletedVods from './pages/DeletedVods';
import DownloadClip from './pages/DownloadClip';
import Home from './pages/Home';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/DeletedClips">
        <DeletedClips />
      </Route>
      <Route path="/DeletedVods">
        <DeletedVods />
      </Route>
      <Route path="/DownloadClip">
        <DownloadClip />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
