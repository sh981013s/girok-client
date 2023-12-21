import * as S from './AuthButton.styles.tsx';

type AuthButtonProps = {
  text: string;
  isDisabled?: boolean;
  onClickFunc?: () => void;
};

const AuthButton = ({
  text,
  onClickFunc,
  isDisabled = false,
}: AuthButtonProps) => {
  return (
    <S.AuthButton disabled={isDisabled} onClick={onClickFunc}>
      {text}
    </S.AuthButton>
  );
};

export default AuthButton;
