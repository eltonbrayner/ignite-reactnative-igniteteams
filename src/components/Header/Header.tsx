import { logo } from 'assets';
import { BackButton, BackIcon, Container, Logo } from './styles';

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  );
};
