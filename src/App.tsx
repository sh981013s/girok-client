import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUpPage from './pages/signUpPage/SignUpPage.tsx';
import MainPage from './pages/mainPage/MainPage.tsx';
import ROUTES from './constants/routes.ts';
import SignInPage from './pages/signInPage/SignInPage.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
