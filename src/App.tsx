import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTES from '@/constants/routes.ts';
import MainPage from '@/pages/mainPage/MainPage.tsx';
import SignUpPage from '@/pages/signUpPage/SignUpPage.tsx';
import SignInPage from '@/pages/signInPage/SignInPage.tsx';
import CalenderPage from '@/pages/calenderPage/CalenderPage.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.CALENDER} element={<CalenderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
