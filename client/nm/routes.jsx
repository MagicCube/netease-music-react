import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { loadPlaylist } from './action/action-creators';

import Application from './container/Application';
import HomePage from './container/HomePage';
import PlaylistPage from './container/PlaylistPage';

function _playlistPage_onEnter(state, store) {
  store.dispatch(loadPlaylist(state.params.playlistId));
}

export default function (store) {
  return (<Route path="/" component={Application}>
    <IndexRoute component={HomePage} />
    <Route path="/playlist/:playlistId" component={PlaylistPage} onEnter={state => _playlistPage_onEnter(state, store)} />
  </Route>);
}
