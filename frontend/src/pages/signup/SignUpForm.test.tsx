// import dependencies
import React from 'react';

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import react-testing methods
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByLabelText,
  act,
} from '@testing-library/react';

import { SignUpForm } from './SignUpForm';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { getAuthMSW } from '../../api/endpoints/auth/auth.msw';

//describe('SignupForm', () => {

// declare which API requests to mock
const server = setupServer(...getAuthMSW());

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});

const Wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('SignupForm', () => {
  // establish API mocking before all tests
  beforeAll(() => server.listen());

  beforeEach(() => {
    //jest.useFakeTimers()
  });
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => {
    //jest.useRealTimers()
    server.resetHandlers();
  });
  // clean up once the tests are done
  afterAll(() => server.close());

  test('should render all fields and submit button', () => {
    render(
      <Wrapper>
        <SignUpForm />
      </Wrapper>,
    );

    expect(screen.getByLabelText('Email address')).toBeDefined();
    expect(screen.getByLabelText('First Name')).toBeDefined();
    expect(screen.getByLabelText('Last Name')).toBeDefined();
    expect(screen.getByLabelText('Password')).toBeDefined();
    expect(screen.getByLabelText('Confirm Password')).toBeDefined();
    expect(screen.getByText('Sign Up')).toBeDefined();

    // fireEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
    // fireEvent.click(getByText(/ok/i));
  });

  test('render field errors', async () => {
    render(
      <Wrapper>
        <SignUpForm />
      </Wrapper>,
    );
    const button = await userEvent.click(
      screen.getByRole('button', { name: /sign up/i }),
    );

    const alert = await screen.findAllByRole('alert');
    expect(alert.length).toBe(8);
    // await waitFor(() => {
    //     expect(screen.getByText('Please input your username!')).toBeDefined()
    // })
    // fireEvent.change(screen.getByLabelText(/username/i), { target: { value: '' } });
  });

  test('should submit form values', async () => {
    // const useAuthControllerSignup1 = jest.fn()
    // jest.mock('../', () => {
    //     return jest.fn(() => ({
    //       useAuthControllerSignup: useAuthControllerSignup1,
    //     }))
    // })
    const onSuccess = jest.fn();
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          // ✅ turns retries off
          retry: false,
        },
      },
    });
    render(
      <Wrapper>
        <SignUpForm onSuccess={onSuccess} />
      </Wrapper>,
    );
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'deyna@mintsrc.co.uk' },
    });
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'deyna' },
    });
    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'cegielski' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'abc123XYZ!£$' },
    });
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: 'abc123XYZ!£$' },
    });

    const button = screen.getByRole('button', { name: /sign up/i });
    await userEvent.click(button);
    //expect(button).toBeDisabled();
    //expect(screen.getByLabelText(/loading/i)).toBeDefined();
    //jest.advanceTimersByTime(1000)
    await waitFor(() => expect(onSuccess).toBeCalled());
    expect(button).toBeEnabled();

    //expect(screen.queryByLabelText(/loading/i)).toBe(null);
    //call backend api
    //render loading spinner
    //redirect on success
    //
  });

  test('form submission error', async () => {
    const apiError = rest.post('*/auth/signup', (_req, res, ctx) => {
      return res(
        ctx.delay(0),
        ctx.status(500, 'Mocked status'),
        ctx.json({ error: 'Something went wrong' }),
      );
    });

    server.use(apiError);

    const onSuccess = jest.fn();
    render(
      <Wrapper>
        <SignUpForm onSuccess={onSuccess} />
      </Wrapper>,
    );
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'deyna@mintsrc.co.uk' },
    });
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'deyna' },
    });
    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'cegielski' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'abc123XYZ!£$' },
    });
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: 'abc123XYZ!£$' },
    });

    const button = screen.getByRole('button', { name: /sign up/i });
    await userEvent.click(button);
    //expect(button).toBeDisabled();
    //await waitFor(() => expect(onSuccess).toBeCalledTimes(0))
    //const alert = await screen.findByRole('alert');
    //expect(alert).toBeDefined();
    expect(onSuccess).toBeCalledTimes(0);
    //expect(button).toBeEnabled();
  });
});
