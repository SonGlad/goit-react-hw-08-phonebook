import { UserMenuStyled } from "./UserMenu.styled";
import { useDispatch } from 'react-redux';
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/Auth/auth-operations";
import defaulAvatar from "../../images/cool-boy.png"



export const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
  
  

  return (
    <UserMenuStyled>
      <img className="avatar" src={defaulAvatar} alt='' width='32' />
      <p className="username">Welcome! You are logged as <span className="user">"{user}"</span></p>
      <button className="btn btn-primary btn-block btn-large" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuStyled>
  );
};