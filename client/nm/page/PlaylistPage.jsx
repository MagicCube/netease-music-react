import React, { Component, PropTypes } from 'react';

export default class PlaylistPage extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      params: PropTypes.shape({ playlistId: PropTypes.string })
    }).isRequired
  }

  componentDidMount() {

  }

  render() {
    return (<h1>
      {this.context.router.params.playlistId}
    </h1>);
  }
}
