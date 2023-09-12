import { SharedLayout } from "./SharedLayout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshCurrentUser } from "redux/Auth/auth-operations";
import { useAuth } from "hooks/useAuth";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { setCurrentRoute } from "redux/Auth/auth-slice";



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const CreateContactsPage = lazy(() => import('../pages/CreateContacts/CreateContacts'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();


  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [dispatch, location.pathname]);


  useEffect(() => {
    dispatch(refreshCurrentUser());
  },[dispatch])



  return isRefreshing ? (
      <b>Refreshing current session...</b>
    ) : (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/createcontacts" component={<RegisterPage/>} />
        }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/createcontacts" component={<LoginPage/>} />
        }/>
        <Route path="/createcontacts" element={
          <PrivateRoute redirectTo="/login" component={<CreateContactsPage/>}/>
        }/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
        }/>
      </Route>
    </Routes>
  );
}; 