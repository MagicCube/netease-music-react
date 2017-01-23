import { Link } from 'react-router';
import React, { PropTypes } from 'react';

import '../res/playlist.scss';

export default function PlaylistList(props, context) {
  function renderItem(playlist) {
    const selected = (playlist.id === props.selectedPlaylistId);
    return <li key={playlist.id} className={selected ? 'selected' : null}><Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link></li>;
  }

  function renderItems() {
    return props.playlists.map(playlist => renderItem(playlist));
  }

  return (
    <div className="nm-playlist">
      <ul>
        { renderItems() }
      </ul>
    </div>
  );
}

PlaylistList.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  selectedPlaylistId: PropTypes.number
};

PlaylistList.defaultProps = {
  playlists: [],
  selectedPlaylistId: null
};

PlaylistList.contextTypes = {
  router: PropTypes.shape({
    params: PropTypes.shape({ playlistId: PropTypes.string })
  }).isRequired
};
