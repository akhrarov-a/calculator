import React from 'react';
import { Content, hoc } from '@core';
import { useCurrency } from './currency.props';
import styles from './currency.module.scss';
import { CurrencySides } from '../../api';

/**
 * Renders Currency
 */
const Currency = hoc(
  useCurrency,
  ({ currencies, selected, fields, onSelect, onFieldsChange }) => (
    <Content>
      <div className={styles.container}>
        <div className={styles.currency}>
          <select
            value={selected.left?.name}
            onChange={(event) =>
              onSelect(CurrencySides.LEFT, event.target.value)
            }
          >
            {currencies.map(({ name, rate }) => (
              <option label={name} key={`${name}-${rate}`} value={name} />
            ))}
          </select>
          <input
            type='text'
            value={fields.left}
            onChange={(event) =>
              onFieldsChange(CurrencySides.LEFT, event.target.value)
            }
          />
        </div>
        <div className={styles.currency}>
          <select
            value={selected.right?.name}
            onChange={(event) =>
              onSelect(CurrencySides.RIGHT, event.target.value)
            }
          >
            {currencies.map(({ name, rate }) => (
              <option label={name} key={`${name}-${rate}`} value={name} />
            ))}
          </select>
          <input
            type='text'
            value={fields.right}
            onChange={(event) =>
              onFieldsChange(CurrencySides.RIGHT, event.target.value)
            }
          />
        </div>
      </div>
    </Content>
  )
);

export { Currency };
