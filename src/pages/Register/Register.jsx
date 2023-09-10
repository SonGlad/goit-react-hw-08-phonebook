import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';
import { RegisterFormStyles } from './Register.styled';



const RegisterForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };



  return (
    <RegisterFormStyles onSubmit={handleSubmit} autoComplete="off">
      <label className='label'>
        Username
        <input type="text" name="name" />
      </label>
      <label className='label'>
        Email
        <input type="email" name="email" />
      </label>
      <label className='label'>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </RegisterFormStyles>
  );
};


export default RegisterForm;
