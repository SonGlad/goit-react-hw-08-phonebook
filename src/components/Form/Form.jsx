import { FormStyle } from "./Form.styled";
import { useDispatch } from "react-redux";
import { addNewContact } from "redux/Contacts/contacts-operations";
import { useContacts } from "hooks/useContacts";



export const Form = () => {
    const {contacts} = useContacts();
    const dispatch = useDispatch();


    const onFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const number = event.target.number.value;

        if (contacts.some(
            contact => 
            contact.number === number || 
            contact.name.toLowerCase() === name.toLowerCase())){
              alert(`${name} or entered ${number} number is already in contacts.`);
              return;
            }
        else if (!/^\d+$/.test(number)) {
            alert('Please enter a valid number.');
            return;
        }

        dispatch(addNewContact({name, number}))
        event.target.reset();
    }; 



    return (
        <FormStyle onSubmit={onFormSubmit}>
            <label className='label' htmlFor='name'>
                <span className="input-title">Name</span>
                <input className="input"
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder='Rosie Simpson'
                id='name'
                />
            </label>
            <label htmlFor='number'>
                <span className="input-title">Number</span>
                <input className="input"
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder='459-12-56'
                    id='number'
                    />
            </label>
            <button 
                className="btn btn-primary btn-block btn-large" 
                type='submit'
                disabled={contacts.name === '' && contacts.number === ''}
                >Add Contact
            </button>
        </FormStyle>
    );
};
