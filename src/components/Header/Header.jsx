import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { HeaderStyled } from './Header.styled';
import { useSelector } from 'react-redux';
import { loggedUser } from 'redux/Auth/auth-selectors';



export const Header = () => {
  const isLoggedIn = useSelector(loggedUser)

  

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};