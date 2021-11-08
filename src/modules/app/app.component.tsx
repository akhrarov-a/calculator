import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from '@calculator';
import { Currency } from '@currency';
import { Header } from '@core';
import styles from './app.module.scss';

/**
 * Renders App
 */
const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/currency' element={<Currency />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export { App };
