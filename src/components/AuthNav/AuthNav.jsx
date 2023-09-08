import { NavLink } from 'react-router-dom';
import { AuthNavStyles } from './AuthNav.styled';



export const AuthNav = () => {
  return (
    <AuthNavStyles>
      <NavLink className='link' to="/register">
        Register
      </NavLink>
      <NavLink className='link' to="/login">
        Log In
      </NavLink>
    </AuthNavStyles>
  );
};