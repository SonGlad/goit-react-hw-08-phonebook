import PropTypes from 'prop-types';
import { ContactsStyle } from "./ContactsList.styled";
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as PnoneIcon} from "../../images/phone.svg";
import {ReactComponent as CheckedIcon} from "../../images/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../images/rectangle.svg";



export const ContactsList = ({
    filteredContacts, 
    onDeleteContact, 
    checkbox, 
    handleCheckboxChange, 
    handleClickContainer}) => {


    return(
        <ContactsStyle>
            {filteredContacts.map(({id, name, number}) => (
                <li className="list" key={id}>
                    <div className='checkbox-container'>
                        <input className="checkbox"
                        type="checkbox"
                        name="user_agreement" 
                        id={id}
                        checked={checkbox.includes(id)}
                        onChange={() => handleCheckboxChange(id)}
                        />
                        <div className="custom-checkbox">
                            <CheckBoxIcon className="custom-checkbox-before" width="20" height="20"/>
                            <CheckedIcon className="custom-checkbox-after" width="20" height="20"/>
                        </div>
                    </div>
                    <div className='container-for-modal' id={id} onClick={() => handleClickContainer(id)}>
                        <div className="user-container">
                            <div className="cont-sum">
                                <UserIcon className="icon" width="30" height="25"/>
                                <p className="title-user">User:</p>
                            </div>
                            <div className="list-name-container">
                                <h3 className="list-name">{name}</h3>:
                            </div>
                        </div>
                        <div className="number-container">
                            <div className="cont-sum">
                                <PnoneIcon className="icon" width="30" height="25"/>
                                <p className="title-number">Number:</p>
                            </div>
                            <div className="list-number-container">
                                <p className="list-number">{number}</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                    {checkbox.includes(id) && (
                        <button
                            className="btn btn-primary btn-block btn-large"
                            type="button"
                            onClick={() => onDeleteContact(id)}
                            >Delete
                        </button>
                        )}
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
    checkbox: PropTypes.arrayOf(PropTypes.string.isRequired),
    onDeleteContact: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleClickContainer: PropTypes.func.isRequired,
};