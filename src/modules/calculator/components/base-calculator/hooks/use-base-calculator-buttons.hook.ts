import { BaseCalculatorButton } from '@api';
import { Actions, ButtonTheme, Numbers } from '../../../../../api';

/**
 * Use Base Calculator Buttons
 */
const useBaseCalculatorButtons = (): BaseCalculatorButton[] => [
  {
    element: 'C',
    code: Actions.CLEAR,
    theme: ButtonTheme.DANGER
  },
  {
    element: '( )',
    code: Actions.BRACKETS,
    theme: ButtonTheme.ACTION
  },
  {
    element: '%',
    code: Actions.PERCENTAGE,
    theme: ButtonTheme.ACTION
  },
  {
    element: '&#247;',
    code: Actions.DIVIDE,
    theme: ButtonTheme.ACTION
  },
  {
    element: '7',
    code: Numbers.SEVEN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '8',
    code: Numbers.EIGHT,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '9',
    code: Numbers.NINE,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '&#215;',
    code: Actions.MULTIPLY,
    theme: ButtonTheme.ACTION
  },
  {
    element: '4',
    code: Numbers.FOUR,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '5',
    code: Numbers.FIVE,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '6',
    code: Numbers.SIX,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '&#8722;',
    code: Actions.MINUS,
    theme: ButtonTheme.ACTION
  },
  {
    element: '1',
    code: Numbers.ONE,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '2',
    code: Numbers.TWO,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '3',
    code: Numbers.THREE,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '&#43;',
    code: Actions.PLUS,
    theme: ButtonTheme.ACTION
  },
  {
    element: '&#177;',
    code: Actions.CHANGE_SIGN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '0',
    code: Numbers.ZERO,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '&#44;',
    code: Actions.ADD_COMMA,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '&#61;',
    code: Actions.EQUAL,
    theme: ButtonTheme.EQUAL
  }
];

export { useBaseCalculatorButtons };
