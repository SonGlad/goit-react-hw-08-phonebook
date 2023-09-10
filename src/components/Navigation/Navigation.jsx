import { NavLink } from 'react-router-dom';
import { NavigationStyles } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';



export const Navigation = () => {
  const {isLoggedIn} = useAuth();

  

  return (
    <NavigationStyles>
      <NavLink className='link' to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className='link' to="/contacts">
          Contacts
        </NavLink>
      )}  
    </NavigationStyles>
  );
};
