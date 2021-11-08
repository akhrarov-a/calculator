import React from 'react';
import { hoc } from '@core';
import { useMonitor } from './monitor.props';
import styles from './monitor.module.scss';

/**
 * Renders Monitor
 */
const Monitor = hoc(
  useMonitor,
  ({
    actionSign,
    monitorValue,
    monitorValueToChange,
    errorMessage,
    onBackspaceClick
  }) => (
    <div className={styles.monitor}>
      {!!actionSign && (
        <div className={styles.process}>
          <p>{monitorValueToChange}</p>
          <p dangerouslySetInnerHTML={{ __html: `${actionSign}` }} />
        </div>
      )}
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
