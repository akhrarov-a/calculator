import React from 'react';
import { hoc } from '@core';
import { useMonitor } from './monitor.props';
import styles from './monitor.module.scss';

/**
 * Renders Monitor
 */
const Monitor = hoc(
  useMonitor,
  ({ monitorValue, monitorValueToChange, onChange, onBackspaceClick }) => (
    <div className={styles.monitor}>
      {!!monitorValueToChange && <p>{monitorValueToChange}</p>}
      <input
        type='text'
        className={styles.input}
        autoFocus
        value={monitorValue}
        onChange={onChange}
      />
      <p className={styles.backspace} onClick={onBackspaceClick}>
        &#9003;
      </p>
    </div>
  )
);

export { Monitor };
