import React from 'react';

import Header from './Header';
import PlaylistNav from './PlaylistNav';

import '../res/application.scss';

export default function Application() {
  return (<div className="nm-app">
    <Header />
    <div className="nm-app-body">
      <div className="nm-app-nav-bar">
        <PlaylistNav />
      </div>
      <main className="nm-app-main" />
    </div>
    <div className="nm-app-footer" />
  </div>);
}
