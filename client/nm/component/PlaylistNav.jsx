import { Link } from 'react-router';
import React, { PropTypes } from 'react';

import '../res/playlist-nav.scss';

export default function PlaylistNav(props, context) {
  function renderItem(playlist) {
    const selected = (playlist.id === parseInt(context.router.params.playlistId, 0));
    return <li key={playlist.id} className={selected ? 'selected' : null}><Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link></li>;
  }

  function renderItems() {
    return props.playlists.map(playlist => renderItem(playlist));
  }

  return (
    <div className="nm-playlist-nav">
      <ul>
        { renderItems() }
      </ul>
    </div>
  );
}

PlaylistNav.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};

PlaylistNav.defaultProps = {
  playlists: []
};

PlaylistNav.contextTypes = {
  router: PropTypes.shape({
    params: PropTypes.shape({ playlistId: PropTypes.string })
  }).isRequired
};
