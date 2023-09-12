import { ContactsStyle } from "./ContactsList.styled";
import PropTypes from 'prop-types';
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as PnoneIcon} from "../../images/phone.svg";



export const ContactsList = ({filteredContacts, onDeleteContact}) => {
    return(
        <ContactsStyle>
            {filteredContacts.map(({id, name, number}) => (
                <li className="list" key={id}>
                    <div className="cont-title left-cont">
                        <div className="cont-sum">
                             <UserIcon className="icon" width="30" height="25"/>
                            <p className="title-user">User:</p>
                        </div>
                        <div className="cont-sum">
                             <PnoneIcon className="icon" width="30" height="25"/>
                            <p className="title-number">Number:</p>
                        </div>
                    </div>
                    <div className="cont-list">
                        <div className="cont-list-title">
                            <h3 className="list-name">{name}</h3>:
                        </div>
                        <p className="list-number">{number}</p>
                        <button className="btn btn-primary btn-block btn-large" 
                        type="button"
                        onClick={() => onDeleteContact(id)}
                        >Delete</button>
                    </div>
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