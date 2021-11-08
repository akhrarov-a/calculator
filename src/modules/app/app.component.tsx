import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from '@calculator';
import { Currency } from '@currency';
import { Header } from '@core';
import { NotFound } from './components';
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export { App };
