import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({ playlist: state.currentPlaylist })
)
export default class PlaylistPage extends Component {
  static propTypes = {
    playlist: PropTypes.shape().isRequired
  }

  render() {
    const { playlist } = this.props;
    console.log(playlist);
    return (<h1>{playlist.name}</h1>);
  }
}
