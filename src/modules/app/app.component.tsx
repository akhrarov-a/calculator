import React from 'react';
import { hoc } from '../../core';
import { useApp } from './app.props';

/**
 * Renders App
 */
const App = hoc(useApp, ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
));

export { App };
