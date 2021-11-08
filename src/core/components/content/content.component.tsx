import React from 'react';
import styles from './content.module.scss';

/**
 * Renders Content
 */
const Content: React.FC = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

export { Content };
