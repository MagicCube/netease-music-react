import React from 'react';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import { loadPlaylists } from './action/playlist-action-creators';
import Application from './component/Application';
import configStore from './store';

import './res/index.scss';

const store = configStore();

$(() => {
  store.dispatch(loadPlaylists());
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Application} />
      </Router>
    </Provider>,
    document.getElementById('nm-root')
  );
});
