import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../component/Header';
import PlaylistNav from '../component/PlaylistNav';

import '../res/application.scss';

@connect(
  state => ({ playlists: state.playlists })
)
export default class Application extends Component {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  }

  static defaultProps = {
    playlists: []
  }

  render() {
    return (<div className="nm-app">
      <Header />
      <div className="nm-app-body">
        <div className="nm-app-nav-bar">
          <PlaylistNav playlists={this.props.playlists} />
        </div>
        <main className="nm-app-main" />
      </div>
      <div className="nm-app-footer" />
    </div>);
  }
}
