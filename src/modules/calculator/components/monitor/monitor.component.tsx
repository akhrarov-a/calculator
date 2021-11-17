import React from 'react';
import { hoc } from '@core';
import { useMonitor } from './monitor.props';
import styles from './monitor.module.scss';

/**
 * Renders Monitor
 */
const Monitor = hoc(
  useMonitor,
  ({ actionDesc, monitorValue, errorMessage, onBackspaceClick }) => (
    <div className={styles.monitor}>
      <div
        className={styles.process}
        dangerouslySetInnerHTML={{ __html: `${actionDesc || ''}` }}
      />
      <input
        type='text'
        readOnly
        className={styles.input}
        value={monitorValue}
      />
      <div className={styles.backspace} onClick={onBackspaceClick}>
        {!!errorMessage && <p>{errorMessage}</p>}&#9003;
      </div>
    </div>
  )
);

export { Monitor };
