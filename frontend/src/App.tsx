import 'index.css';
import { RootStoreProvider } from 'store';
import { Routes, Route } from 'react-router-dom';
import { NotFound, SignUpPage, Home, Product, Settings } from "pages";
import { RouteMap } from "router/route-map";

function App(): JSX.Element {
  return (
        <RootStoreProvider>
          <Routes>
            <Route path={`/${RouteMap.SIGNUP}`} element={<SignUpPage />} />
            <Route path={`/${RouteMap.PRODUCT}`} element={<Product />} />
            <Route path={`/${RouteMap.HOME}`} element={<Home />} />
            <Route path={`/${RouteMap.SETTINGS}`} element={<Settings />} />
            <Route path={`/${RouteMap.WILDCARD}`} element={<NotFound />} />
          </Routes>
        </RootStoreProvider>
  );
}

export default App;
