import React, { PropTypes } from 'react';

import '../res/playlist-nav.scss';

export default function PlaylistNav(props) {
  return (
    <div className="nm-playlist-nav">
      <ul>
        { props.playlists.map(playlist => <li key={playlist.id}><a>{playlist.name}</a></li>) }
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
