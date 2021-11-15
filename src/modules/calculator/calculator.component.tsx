import React from 'react';
import { Content } from '@core';
import { AdvancedCalculator, BaseCalculator, Monitor } from './components';
import styles from './calculator.module.scss';
import { ActionsHistory } from './components/actions-history';

/**
 * Renders Calculator
 */
const Calculator = () => (
  <div className={styles.container}>
    <Content>
      <Monitor />
      <div className={styles.calculator}>
        <ActionsHistory />
        <AdvancedCalculator />
        <BaseCalculator />
      </div>
    </Content>
  </div>
);

export { Calculator };
