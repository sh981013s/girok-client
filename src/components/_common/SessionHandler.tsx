import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../utils/cookie.ts';
import ROUTES from '../../constants/routes.ts';

const SessionHandler = (props: PropsWithChildren) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnauthorized = () => {
      deleteCookie('access_token');
      deleteCookie('refresh_token');
      navigate(ROUTES.SIGN_IN);
    };

    window.addEventListener('unauthorized', handleUnauthorized);
    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
    };
  }, []);

  return <>{props.children}</>;
};

export default SessionHandler;
