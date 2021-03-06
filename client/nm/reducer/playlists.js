import { handleActions } from 'redux-actions';
import { loadPlaylists } from '../action/action-creators';

const reducer = handleActions({
  [loadPlaylists](state, action) {
    return action.payload;
  }
}, []);

export default reducer;
