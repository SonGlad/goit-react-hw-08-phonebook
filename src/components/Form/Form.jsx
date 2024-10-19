import { FormStyle } from "./Form.styled";
import { useDispatch } from "react-redux";
import { addNewContact } from "redux/Contacts/contacts-operations";
import { useContacts } from "hooks/useContacts";
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as PnoneIcon} from "../../images/phone.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Form = () => {
    const {contacts, countryCode} = useContacts();
    const dispatch = useDispatch();
   
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const number = event.target.number.value;


        if (contacts.some(
            contact => 
            contact.number === number || 
            contact.name.toLowerCase() === name.toLowerCase())){
                toast.warning(`${name} or entered ${number} number is already in contacts.`);
                return;
            }
        else if (!/^\d+$/.test(number)) {
            toast.warning('Please enter a valid number.');
            return;
        }
        else if (countryCode === '') {
            toast.warning('Please choose your country.');
            return;
        }

        
        const codeValue = countryCode.split(":")[1].trim();
        const digits = number.split("");
        const formattedNumber = `${digits.slice(0, 2).join('')}-${digits.slice(2, 5).join('')}-${digits.slice(5, 7).join('')}-${digits.slice(7, 9).join('')}`;
        

        const phoneNumber = `${codeValue }-${formattedNumber}`;
        dispatch(addNewContact({name, phone: phoneNumber}));
        event.target.reset();
    }; 
    
        


    return (
        <>
            <FormStyle onSubmit={onFormSubmit}>
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
                        placeholder='Rosie Simpson'
                        id='name'
                    />
                </label>
                <label className='label' htmlFor='number'>
                    <div className='descr-div'>
                        <PnoneIcon className="icon" width="30" height="30"/>
                        <span className="input-title">Number</span>
                    </div>
                    <input className="input input-below"
                        type="tel"
                        name="number"
                        title="Phone number must be digits only. Without spaces, dashes, parentheses or +"
                        required
                        placeholder='459125687'
                        minLength="1"
                        maxLength="9"
                        id='number'
                    />
                </label>
                <p className="descr-text">&#8727; Type the number in the format mentioned above only.</p>
                <button 
                    className="btn btn-primary btn-block btn-large" 
                    type='submit'
                    disabled={contacts.name === '' && contacts.number === ''}
                    >Add Contact
                </button>
            </FormStyle>    
        </>
    );
};
