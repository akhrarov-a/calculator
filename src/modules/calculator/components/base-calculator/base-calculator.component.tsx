import React from 'react';
import { Button, hoc } from '@core';
import { useBaseCalculator } from './base-calculator.props';
import styles from './base-calculator.module.scss';

/**
 * Renders Base Calculator
 */
const BaseCalculator = hoc(useBaseCalculator, ({ buttons, handleClick }) => (
  <div className={styles.container}>
    {buttons.map(({ element, code, theme }) => (
      <Button key={code} theme={theme} onClick={() => handleClick(code)}>
        <p dangerouslySetInnerHTML={{ __html: `${element}` }} />
      </Button>
    ))}
  </div>
));

export { BaseCalculator };
