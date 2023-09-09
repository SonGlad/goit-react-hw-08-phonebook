import { UserMenuStyled } from "./UserMenu.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "redux/Auth/auth-selectors";
import { logOut } from "redux/Auth/auth-operations";
import defaulAvatar from "../../images/cool-boy.png"



export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  

  return (
    <UserMenuStyled>
      <img className="avatar" src={defaulAvatar} alt='' width='32' />
      <p className="username">Welcome! You are logged in as {user}</p>
      <button className="button" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuStyled>
  );
};