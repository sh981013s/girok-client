import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ROUTES from '@/constants/routes.ts';
import MainPage from '@/pages/mainPage/MainPage.tsx';
import SignUpPage from '@/pages/signUpPage/SignUpPage.tsx';
import SignInPage from '@/pages/signInPage/SignInPage.tsx';
import CalendarPage from '@/pages/calendarPage/CalendarPage.tsx';
import PageLayout from '@/components/_common/pageLayout/PageLayout.tsx';
import theme from '@/styles/theme.ts';
import GlobalStyle from '@/styles/GlobalStyle.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
            <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
            <Route
              path={ROUTES.CALENDAR}
              element={<CalendarPage />}
            />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
