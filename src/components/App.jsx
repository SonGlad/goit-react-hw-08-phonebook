import { SharedLayout } from "./SharedLayout";
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshCurrentUser } from "redux/Auth/auth-operations";
import { useAuth } from "hooks/useAuth";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));



export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();


  useEffect(()=>{
    dispatch(refreshCurrentUser());
  },[dispatch])



  return isRefreshing ? (
      <b>Refreshing current session...</b>
    ) : (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>} />
        }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />
        }/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
        }/>
      </Route>
    </Routes>
  );
}; 