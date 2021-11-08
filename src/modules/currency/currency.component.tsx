import React from 'react';
import { Content, hoc } from '@core';
import { useCurrency } from './currency.props';
import styles from './currency.module.scss';

/**
 * Renders Currency
 */
const Currency = hoc(
  useCurrency,
  ({
    currencies,
    firstSelected,
    secondSelected,
    values,
    onSelect,
    onValuesChange
  }) => (
    <Content>
      <div className={styles.container}>
        <div className={styles.currency}>
          <select
            value={firstSelected?.name}
            onChange={(event) => onSelect('first', event.target.selectedIndex)}
          >
            {currencies.map(({ name, rate }) => (
              <option label={name} key={`${name}-${rate}`} value={name} />
            ))}
          </select>
          <input
            type='text'
            value={values.first}
            onChange={(event) => onValuesChange('first', event.target.value)}
          />
        </div>
        <div className={styles.currency}>
          <select
            value={secondSelected?.name}
            onChange={(event) => onSelect('second', event.target.selectedIndex)}
          >
            {currencies.map(({ name, rate }) => (
              <option label={name} key={`${name}-${rate}`} value={name} />
            ))}
          </select>
          <input
            type='text'
            value={values.second}
            onChange={(event) => onValuesChange('second', event.target.value)}
          />
        </div>
      </div>
    </Content>
  )
);

export { Currency };
