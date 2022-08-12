import { setupWorker } from 'msw';
import { getAuthMSW } from './endpoints/auth/auth.msw';
console.log(getAuthMSW);
console.log('here');
export const serviceWorker = setupWorker(...getAuthMSW());
