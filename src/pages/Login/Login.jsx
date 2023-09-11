import {FormTitle, LoginFormStyles } from './Login.styled';
import { Containers } from 'components/Containers/Container';
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
    <Containers>
      <FormTitle>Login to Account</FormTitle>
      <LoginFormStyles onSubmit={handleSubmit} autoComplete="on">
      <label className='label' htmlFor='email'>
        <span className="input-title">Email</span>
        <input className="input"
        type="text"
        name="email"
        title="Name may contain letters, apostrophe, dash and spaces. For example luffy@gmail.com, mango-sushi@gmail.com"
        required
        placeholder='MangoBar@gmail.com'
        id='email'
        />
      </label>
      <label className='label' htmlFor='password'>
        <span className="input-title">Password</span>
        <input className="input"
        type="text"
        name="password"
        title="Name may contain letters, apostrophe, dash and spaces. For example luffy@gmail.com, mango-sushi@gmail.com"
        required
        placeholder=''
        id='password'
        />
      </label>
        <button className="btn btn-primary btn-block btn-large" 
         type="submit">Log In
        </button>
      </LoginFormStyles>
    </Containers>
  );
};


export default LoginForm;