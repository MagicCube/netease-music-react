import { combineReducers } from 'redux';

import currentPlaylist from './current-playlist';
import playlists from './playlists';

export default combineReducers({
  currentPlaylist,
  playlists
});
