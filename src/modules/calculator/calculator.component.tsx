import React from 'react';
import { Content } from '@core';
import { BaseCalculator, Monitor } from './components';
import styles from './calculator.module.scss';

/**
 * Renders Calculator
 */
const Calculator = () => (
  <div className={styles.container}>
    <Content>
      <Monitor />
      <div className={styles.calculator}>
        <BaseCalculator />
      </div>
    </Content>
  </div>
);

export { Calculator };
