import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';
import {FormTitle, RegisterFormStyles } from './Register.styled';
import { Containers } from 'components/Containers/Container';



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
    <Containers>
      <FormTitle>Create Account</FormTitle>
      <RegisterFormStyles onSubmit={handleSubmit} autoComplete="off">
        <label className='label' htmlFor='name'>
          <span className="input-title">Username</span>
          <input className="input"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder='MaNgO'
          id='name'
          />
        </label>
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
          type="submit">SIGN UP
        </button>
      </RegisterFormStyles>
    </Containers>
  );
};


export default RegisterForm;
