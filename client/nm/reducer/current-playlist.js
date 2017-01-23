import { handleActions } from 'redux-actions';
import { loadPlaylist } from '../action/action-creators';

const reducer = handleActions({
  [loadPlaylist](state, action) {
    return action.payload;
  }
}, {});

export default reducer;
