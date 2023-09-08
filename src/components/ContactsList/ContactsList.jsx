import { ContactsStyle } from "./ContactsList.styled";
import PropTypes from 'prop-types';


export const ContactsList = ({filteredContacts, onDeleteContact}) => {
    return(
        <ContactsStyle>
            {filteredContacts.map(({id, name, number}) => (
                <li className="list" key={id}>
                    <h3 className="list-name">{name}:</h3>
                    <p className="list-number">{number}</p>
                    <button className="btn btn-primary btn-block btn-large" 
                    type="button"
                    onClick={() => onDeleteContact(id)}
                    >Delete</button>
                </li>
            ))}
        </ContactsStyle>
    );
};



ContactsList.propTypes ={
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};