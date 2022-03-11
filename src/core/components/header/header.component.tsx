import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Content } from '../content';
import styles from './header.module.scss';

/**
 * Renders Header
 */
const Header = () => (
  <div className={styles.container}>
    <Content>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Calculator</h1>
        </div>
        <div>
          <NavLink
            to='/calculator'
            className={({ isActive }) =>
              classNames(styles.link, { [styles['link-active']]: isActive })
            }
          >
            Calculator
          </NavLink>
          <NavLink
            to='/currency'
            className={({ isActive }) =>
              classNames(styles.link, { [styles.linkActive]: isActive })
            }
          >
            Currency
          </NavLink>
        </div>
      </div>
    </Content>
  </div>
);

export { Header };
