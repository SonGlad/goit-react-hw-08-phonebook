import { ContactsContainer } from "./ContactsSum.styled";
import { NavLink } from 'react-router-dom';
import { useContacts } from "hooks/useContacts";




export const ContactsSum = () => {
    const {contacts} = useContacts();


    return(
        <ContactsContainer>
            <p className="contacts-text">You have already {contacts.length} contacts in your list</p>
            <NavLink className='link btn btn-primary btn-block btn-large' to="/contacts">
                See All Contacts
            </NavLink>
         </ContactsContainer>
    );
};