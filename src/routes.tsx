import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DeletedClips from './pages/DeletedClips';
import DeletedVods from './pages/DeletedVods';
import DownloadClip from './pages/DownloadClip';
import Home from './pages/Home';
import api from './services/api';

const Routes: React.FC = () => {
  useEffect(() => {
    api.get(`${process.env.REACT_APP_CORS}`); // opens cors server as soon as page loads
  }, []);

  return (
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
};

export default Routes;
