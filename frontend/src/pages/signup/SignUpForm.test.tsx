// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, waitFor, screen, getByLabelText, act} from '@testing-library/react'


import { SignUpForm } from './SignUpForm';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getAuthMSW } from '../../api/endpoints/auth/auth.msw'

//describe('SignupForm', () => {

    // declare which API requests to mock
const server = setupServer(
    ...getAuthMSW()
  )

describe('SignupForm', () => {
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())

  beforeEach(() => {
    //jest.useFakeTimers()
  })
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => {
    //jest.useRealTimers()
    server.resetHandlers()
  })
  // clean up once the tests are done
  afterAll(() => server.close())

    test('should render all fields and submit button', () => {

        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
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

        render(<SignUpForm />)

        expect(screen.getByLabelText('Username')).toBeDefined()
        expect(screen.getByLabelText('First Name')).toBeDefined()
        expect(screen.getByLabelText('Last Name')).toBeDefined()
        expect(screen.getByLabelText('Password')).toBeDefined()
        expect(screen.getByLabelText('Confirm Password')).toBeDefined()
        expect(screen.getByText('Submit')).toBeDefined()

        // fireEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
        // fireEvent.click(getByText(/ok/i));
    })

    test('render field errors', async () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
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

        render(<SignUpForm />)
        const button = await userEvent.click(screen.getByRole('button', {name: /sign up/i}))

        const alert = await screen.findAllByRole('alert')
        console.log(alert)
        expect(alert.length).toBe(5)
        // await waitFor(() => {
        //     expect(screen.getByText('Please input your username!')).toBeDefined()
        // })
        // fireEvent.change(screen.getByLabelText(/username/i), { target: { value: '' } });
        
    })


    test('should submit form values', async () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
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

        // const useAuthControllerSignup1 = jest.fn()
        // jest.mock('../', () => {
        //     return jest.fn(() => ({
        //       useAuthControllerSignup: useAuthControllerSignup1,
        //     }))
        // })
        const onSuccess = jest.fn()
        const queryClient = new QueryClient({
          defaultOptions: {
            queries: {
              // ✅ turns retries off
              retry: false
            },
          },
        })
        render(
          <QueryClientProvider client={queryClient}>
          <SignUpForm onSuccess={onSuccess} />
          </QueryClientProvider>
        )
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'deyna@mintsrc.co.uk' } });
        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'deyna' } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'cegielski' } });
        fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'password' } });
        fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password' } });

        const button = await userEvent.click(screen.getByRole('button', {name: /sign up/i}))
        expect(screen.getByLabelText(/loading/i)).toBeDefined()
        //jest.advanceTimersByTime(1000)
        await waitFor(() => expect(onSuccess).toBeCalled())
        expect(screen.queryByLabelText(/loading/i)).toBe(null)
        //call backend api
        //render loading spinner
        //redirect on success
        //
    })

    test('form submission error', async () => {
      const apiError = rest.post('*/auth/signup', (_req, res, ctx) => {
        return res(
          ctx.delay(0),
          ctx.status(500, 'Mocked status'),
          ctx.json({error: 'Something went wrong'}),
        );
      })

      server.use(apiError);

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
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

      const onSuccess = jest.fn()
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            // ✅ turns retries off
            retry: false
          },
        },
      })
      render(
        <QueryClientProvider client={queryClient}>
          <SignUpForm onSuccess={onSuccess} />
        </QueryClientProvider>
      )
      fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'deyna@mintsrc.co.uk' } });
      fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'deyna' } });
      fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'cegielski' } });
      fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'password' } });
      fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password' } });

      await userEvent.click(screen.getByRole('button', {name: /sign up/i}))
      expect(screen.getByLabelText(/loading/i)).toBeDefined()
      //await waitFor(() => expect(onSuccess).toBeCalledTimes(0))
      const alert = await screen.findByRole('alert')
      expect(alert).toBeDefined()
      expect(onSuccess).toBeCalledTimes(0)
    })

    test('password complexity', () => {

    })

    test('password confirmation', () => {

    })


})