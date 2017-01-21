import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducer';

export default function configStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        promiseMiddleware
      )
    )
  );
  return store;
}
