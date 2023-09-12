import { NavLink } from 'react-router-dom';
import { NavigationStyles } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import homePicture from "../../images/pngwing.png"



export const Navigation = () => {
  const {isLoggedIn} = useAuth();

  

  return (
    <NavigationStyles>
      <NavLink className='link link-styled' to="/">
        <img src={homePicture} alt="" width="60"/>
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className='link' to="/createcontacts">
            Create Contacts
          </NavLink>
          <NavLink className='link' to="/contacts">
            Сontacts
          </NavLink>  
        </>
      )}
    </NavigationStyles>
  );
};
