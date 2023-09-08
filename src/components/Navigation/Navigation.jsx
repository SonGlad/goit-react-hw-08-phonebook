import { NavLink } from 'react-router-dom';
import { NavigationStyles } from './Navigation.styled';
// import { useAuth } from 'hooks';



export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

  return (
    <NavigationStyles>
        <NavLink className='link' to="/">
        Home
        </NavLink>
      {/* {isLoggedIn && (
        <NavLink className='link' to="/tasks">
          Tasks
        </NavLink>
      )} */}      
        <NavLink className='link' to="/tasks">
            Tasks
        </NavLink>
    </NavigationStyles>
  );
};
