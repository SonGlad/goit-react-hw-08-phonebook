import { FormStyle } from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "redux/contactOperations";
import { selectContacts } from "redux/contactSlice";



export const Form = () => {


    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);


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

                // pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
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
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
