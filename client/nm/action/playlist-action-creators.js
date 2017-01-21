import { createAction } from 'redux-actions';
import { getUserPlayLists } from '../api';

const loadPlaylists = createAction('LOAD_PLAYLISTS', getUserPlayLists);

export {
  loadPlaylists
};
