import { useNavigate } from 'react-router-dom';

import * as S from './Navbar.styles.tsx';

import logo from '@/assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <S.NavBarContainer>
      <S.Logo src={logo} alt='girok logo' onClick={handleLogoClick} />
    </S.NavBarContainer>
  );
};

export default Navbar;
