import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { useMonitorActionDesc } from '@core';
import { setMonitorValue } from '../../store';

/**
 * Use Monitor
 */
const useMonitor = () => {
  const dispatch = useDispatch();

  const { actionDesc } = useMonitorActionDesc();

  const { monitorValue, errorMessage } = useSelector(
    (state: State) => state.calculator
  );

  const onBackspaceClick = () => {
    const value = `${monitorValue}`.slice(0, -1);

    dispatch(setMonitorValue(value || '0'));
  };

  return {
    actionDesc,
    monitorValue: monitorValue.replace('.', ','),
    errorMessage,
    onBackspaceClick
  };
};

export { useMonitor };
