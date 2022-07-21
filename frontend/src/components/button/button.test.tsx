// hello.test.js, again
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import pretty from 'pretty';

import { StyledButton } from './index';

import { dark } from '../../definitions/styled-components';

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

it('should render a styled button', () => {
  const { container } = render(<StyledButton />);
  expect(pretty(container)).toMatchInlineSnapshot();
  expect(container).toHaveStyleRule('color', dark.colors.background);
  //   const el = (
  //     <StyledButton type="primary" htmlType="submit">
  //       Sign Up
  //     </StyledButton>
  //   );
  //   act(() => {
  //     render(el, container);
  //   });
  //   expect(
  //     pretty(container.innerHTML),
  //   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
});
