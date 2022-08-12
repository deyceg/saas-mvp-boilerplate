import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/query-client';
import { serviceWorker } from './api/service-worker';
import { ThemeProvider } from 'theme/ThemeContext';
import Toggle from 'theme/ThemeToggle';
import Body from 'components/core/Body';

/**
 *  In development, mock backend responses. For integration testing use NODE_ENV=test|production
 */
if (process.env.NODE_ENV === 'development') {
  console.debug(`Starting service worker!`);

  import('./api/service-worker').then(({ serviceWorker }) => {
    serviceWorker.start({ onUnhandledRequest: 'warn' });
    console.log('Service worker started!');
  });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider initialTheme={'light'}>
          <Body>
            <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
              <Toggle />
            </div>
            <App />
          </Body>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
