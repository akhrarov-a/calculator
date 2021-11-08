import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { setMonitorValue } from '../../store';

/**
 * Use Monitor
 */
const useMonitor = () => {
  const dispatch = useDispatch();

  const { monitorValue } = useSelector((state: State) => state.calculator);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (isNaN(+value)) return;

    dispatch(setMonitorValue(+value));
  };

  const onBackspaceClick = () => {
    const value = +`${monitorValue}`.slice(0, -1);

    dispatch(setMonitorValue(value));
  };

  return { monitorValue, onChange, onBackspaceClick };
};

export { useMonitor };
