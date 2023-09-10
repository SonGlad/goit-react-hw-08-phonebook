import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { HeaderStyled } from './Header.styled';
import { useAuth } from 'hooks/useAuth';



export const Header = () => {
  const {isLoggedIn} = useAuth();

  

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};