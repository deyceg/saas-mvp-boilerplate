import { setupWorker } from 'msw'
import { getAuthMSW } from '../endpoints/auth/auth.msw'

// This configures a Service Worker with the given request handlers.

export const worker = setupWorker(...getAuthMSW())