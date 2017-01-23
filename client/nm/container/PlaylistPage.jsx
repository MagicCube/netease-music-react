import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import '../res/playlist-page.scss';

@connect(
  state => ({ playlist: state.currentPlaylist })
)
export default class PlaylistPage extends Component {
  static propTypes = {
    playlist: PropTypes.shape().isRequired
  }

  render() {
    const { playlist } = this.props;
    return (
      <div className="nm-playlist-page">
        <div className="header">
          <div className="cover" style={{ backgroundImage: `url(${playlist.coverImgUrl})` }} />
          <div className="info">
            <h1 className="title">{playlist.name}</h1>
          </div>
        </div>
        <div className="body" />
      </div>
    );
  }
}
