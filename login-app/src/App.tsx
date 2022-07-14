import { StyledThemeProvider } from "definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { RootStoreProvider } from 'store';
import "./i18n";
import "tailwindcss/tailwind.css";

import Home from "pages";

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./api/mocks')

    worker.start()
  }


function App(): JSX.Element {
    const queryClient = new QueryClient()
    return (
        <StyledThemeProvider>
<QueryClientProvider client={queryClient}>
<RootStoreProvider>
        <div className="App">
            <Home />
        </div>
         </RootStoreProvider>
</QueryClientProvider>
</StyledThemeProvider>
      );
};

export default App;
