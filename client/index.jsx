import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

$(() => {
  render(
    <h1>Welcome</h1>,
    document.getElementById('nm-root')
  );
});
