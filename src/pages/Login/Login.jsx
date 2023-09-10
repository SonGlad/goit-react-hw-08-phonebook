import { LoginFormStyles } from './Login.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';



const LoginForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value.toString(),
        password: form.elements.password.value.toString(),
      })
    );
    form.reset();
  };



  return (
    <LoginFormStyles onSubmit={handleSubmit} autoComplete="off">
      <label className='label'>
        Email
        <input type="email" name="email" />
      </label>
      <label className='label'>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </LoginFormStyles>
  );
};


export default LoginForm;