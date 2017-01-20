import React from 'react';
import { render } from 'react-dom';

import './res/index.scss';

$(() => {
  render(
    <h1>Welcome</h1>,
    document.getElementById('nm-root')
  );
});
