import { UserMenuStyled } from "./UserMenu.styled";
// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';



export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <UserMenuStyled>
      <p className='username'>Welcome,</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </UserMenuStyled>
  );
};