import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Application from './container/Application';
import HomePage from './page/HomePage';
import PlaylistPage from './page/PlaylistPage';

export default <Route path="/" component={Application}>
  <IndexRoute component={HomePage} />
  <Route path="/playlist/:playlistId" component={PlaylistPage} />
</Route>;
