import React from 'react';
import { hoc } from '@core';
import { useMonitor } from './monitor.props';
import styles from './monitor.module.scss';

/**
 * Renders Monitor
 */
const Monitor = hoc(useMonitor, () => (
  <div className={styles.monitor}>Monitor</div>
));

export { Monitor };
