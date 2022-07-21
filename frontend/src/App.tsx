import 'antd/dist/antd.css';
import { StyledThemeProvider } from 'definitions/styled-components';
import { RootStoreProvider } from 'store';
import './i18n';

import { Routes, Route } from 'react-router-dom';
import SignUp from 'pages/signup';

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <RootStoreProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </RootStoreProvider>
    </StyledThemeProvider>
  );
}

export default App;
