import React from 'react';
import { hoc } from '@core';
import { useActionsHistory } from './actions-history.props';
import styles from './actions-history.module.scss';

/**
 * Renders Actions History
 */
const ActionsHistory = hoc(useActionsHistory, ({ history }) => (
  <div className={styles.container}>
    {history.map(({ firstValue, secondValue, action, result }) => (
      <div
        className={styles.history}
        key={`${firstValue}${action}${secondValue}=${result}`}
      >
        <div className={styles['history-action']}>
          <p>{firstValue}</p>
          <p dangerouslySetInnerHTML={{ __html: `${action}` }} />
          <p>{secondValue}</p>
        </div>
        <div className={styles['history-result']}>
          <p>= {result}</p>
        </div>
      </div>
    ))}
  </div>
));

export { ActionsHistory };
