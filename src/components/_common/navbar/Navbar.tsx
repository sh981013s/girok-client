import { useNavigate } from 'react-router-dom';

import * as S from './Navbar.styles.tsx';

import logo from '@/assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div>
      <S.Logo src={logo} alt='girok logo' onClick={handleLogoClick} />
    </div>
  );
};

export default Navbar;
