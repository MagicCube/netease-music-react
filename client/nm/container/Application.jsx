import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../component/Header';
import PlaylistList from '../component/PlaylistList';

import '../res/application.scss';

@connect(
  state => ({ playlists: state.playlists })
)
export default class Application extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
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
          <PlaylistList playlists={this.props.playlists} />
        </div>
        <main className="nm-app-main">
          {this.props.children}
        </main>
      </div>
      <div className="nm-app-footer" />
    </div>);
  }
}
