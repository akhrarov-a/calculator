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
    onChange,
    onBackspaceClick
  }) => (
    <div className={styles.monitor}>
      {!!monitorValueToChange && (
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
      <p className={styles.backspace} onClick={onBackspaceClick}>
        &#9003;
      </p>
    </div>
  )
);

export { Monitor };
