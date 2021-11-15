import React from 'react';
import { Button, hoc } from '@core';
import { useAdvancedCalculator } from './advanced-calculator.props';
import styles from './advanced-calculator.module.scss';

/**
 * Advanced Calculator
 */
const AdvancedCalculator = hoc(
  useAdvancedCalculator,
  ({ buttons, handleClick }) => (
    <div className={styles['advanced-calculator']}>
      <div className={styles['constants-buttons']}>
        {buttons.map(
          ({ element, code, theme }, index) =>
            index > buttons.length - 3 && (
              <Button
                key={code}
                theme={theme}
                onClick={() => handleClick(code)}
              >
                <div dangerouslySetInnerHTML={{ __html: `${element}` }} />
              </Button>
            )
        )}
      </div>
      <div className={styles.container}>
        {buttons.map(
          ({ element, code, theme }, index) =>
            index < buttons.length - 2 && (
              <Button
                key={code}
                theme={theme}
                onClick={() => handleClick(code)}
              >
                <div dangerouslySetInnerHTML={{ __html: `${element}` }} />
              </Button>
            )
        )}
      </div>
    </div>
  )
);

export { AdvancedCalculator };
