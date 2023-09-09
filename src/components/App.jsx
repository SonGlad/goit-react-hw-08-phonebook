import { SharedLayout } from "./SharedLayout";
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshCurrentUser } from "redux/Auth/auth-operations";



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));



export const App = () => {
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(refreshCurrentUser());
  },[dispatch])



  return(
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/contacts' element={<ContactsPage/>}/>
      </Route>
    </Routes>
  );
}; 