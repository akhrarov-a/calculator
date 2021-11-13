import { BaseCalculatorButton } from '@api';
import { Actions, ButtonTheme, Numbers } from '../../api';

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
    element: 'CE',
    code: Actions.CLEAR_MONITOR,
    theme: ButtonTheme.DANGER
  },
  {
    element: '%',
    code: Actions.PERCENTAGE,
    theme: ButtonTheme.ACTION
  },
  {
    element: '<p>&#247;</p>',
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
    element: '<p>&#215;</p>',
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
    element: '<p>&#8722;</p>',
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
    element: '<p>&#43;</p>',
    code: Actions.PLUS,
    theme: ButtonTheme.ACTION
  },
  {
    element: '<p>&#177;</p>',
    code: Actions.CHANGE_SIGN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '0',
    code: Numbers.ZERO,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '<p>&#44;</p>',
    code: Actions.ADD_COMMA,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '<p>&#61;</p>',
    code: Actions.EQUAL,
    theme: ButtonTheme.EQUAL
  }
];

export { useBaseCalculatorButtons };
