import React, { Component } from 'react';

import contentOfHome from '../res/doc/home.md';

export default class HomePage extends Component {
  render() {
    return (<div className="nm-home-page" dangerouslySetInnerHTML={{ __html: contentOfHome }} />);
  }
}
