import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * Renders App
 */
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Main Page</div>} />
    </Routes>
  </BrowserRouter>
);

export { App };
