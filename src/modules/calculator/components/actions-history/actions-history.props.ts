import { useSelector } from 'react-redux';
import { State } from '@store';

/**
 * Use Actions History
 */
const useActionsHistory = () => {
  const { history } = useSelector((state: State) => state.calculator);

  return { history };
};

export { useActionsHistory };
