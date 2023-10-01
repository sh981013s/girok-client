import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const signUpButtonHandler = () => {
    navigate('/signup');
  };

  const signInButtonHandler = () => {
    navigate('/signin');
  };

  return (
    <div>
      <h1>Main Page</h1>
      <div>
        <button onClick={signUpButtonHandler}>sign up</button>
        <button onClick={signInButtonHandler}>sign in</button>
      </div>
    </div>
  );
};

export default MainPage;
