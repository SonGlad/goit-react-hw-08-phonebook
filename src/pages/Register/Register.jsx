import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';
import {FormTitle, RegisterFormStyles } from './Register.styled';
import { Containers } from 'components/Containers/Container';
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as EmailIcon} from "../../images/email.svg";
import {ReactComponent as PasswordIcon} from "../../images/password.svg";



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
          <div className='descr-div'>
            <UserIcon className="icon" width="30" height="25"/>
            <span className="input-title">Username</span>
          </div>
          <input className="input"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder=''
          id='name'
          />
        </label>
        <label className='label' htmlFor='email'>
          <div className='descr-div'>
            <EmailIcon className="icon" width="30" height="30"/>
            <span className="input-title">Email</span>
          </div>
          <input className="input"
          type="text"
          name="email"
          title="Name may contain letters, apostrophe, dash and spaces. For example luffy@gmail.com, mango-sushi@gmail.com"
          required
          placeholder=''
          id='email'
          />
        </label>
        <label className='label' htmlFor='password'>
          <div className='descr-div'>
            <PasswordIcon className="icon" width="30" height="20"/>
            <span className="input-title">Password</span>
          </div>
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
