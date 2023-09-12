import { useAuth } from "hooks/useAuth";
import { Navigate } from 'react-router-dom';



export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};


// import { useAuth } from "hooks/useAuth";
// import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/', checkCurrentRoute = false }) => {
//   const { isLoggedIn, isCurrentRoute, isRefreshing } = useAuth();

//   const shouldRedirect = isLoggedIn && (checkCurrentRoute ? isCurrentRoute !== redirectTo : true) && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
// };