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
    onChange,
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
        className={styles.input}
        autoFocus
        value={monitorValue}
        onChange={onChange}
      />
      <div className={styles.backspace} onClick={onBackspaceClick}>
        {!!errorMessage && <p>{errorMessage}</p>}&#9003;
      </div>
    </div>
  )
);

export { Monitor };
