import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import '../res/playlist-nav.scss';

@connect(
  state => ({ playlists: state.playlists })
)
export default class PlaylistNav extends Component {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  };

  static defaultProps = {
    playlists: []
  };

  render() {
    return (
      <div className="nm-playlist-nav">
        <ul>
          { this.props.playlists.map(playlist => <li key={playlist.id}><a>{playlist.name}</a></li>) }
        </ul>
      </div>
    );
  }
}
