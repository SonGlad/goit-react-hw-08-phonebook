import { NavLink } from 'react-router-dom';
import { NavigationStyles } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { loggedUser } from 'redux/Auth/auth-selectors';



export const Navigation = () => {
  const isLoggedIn = useSelector(loggedUser)

  

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
