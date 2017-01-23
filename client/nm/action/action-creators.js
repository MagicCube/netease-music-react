import { createAction } from 'redux-actions';
import { getUserPlaylists, getPlaylist } from '../api';

const loadPlaylists = createAction('LOAD_PLAYLISTS', getUserPlaylists);
const loadPlaylist = createAction('LOAD_PLAYLIST', getPlaylist);

export {
  loadPlaylists,
  loadPlaylist
};
