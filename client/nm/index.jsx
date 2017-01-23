import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import { loadPlaylists } from './action/playlist-action-creators';

import configStore from './store';

import './res/index.scss';

const store = configStore();

$(() => {
  store.dispatch(loadPlaylists());

  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('nm-root')
  );
});
