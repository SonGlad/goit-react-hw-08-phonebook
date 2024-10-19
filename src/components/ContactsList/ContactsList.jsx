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
            {filteredContacts.map(({_id, name, phone}) => (
                <li className="list" key={_id}>
                    <div className='checkbox-container'>
                        <input className="checkbox"
                        type="checkbox"
                        name="user_agreement" 
                        id={_id}
                        checked={checkbox.includes(_id)}
                        onChange={() => handleCheckboxChange(_id)}
                        />
                        <div className="custom-checkbox">
                            <CheckBoxIcon className="custom-checkbox-before" width="20" height="20"/>
                            <CheckedIcon className="custom-checkbox-after" width="20" height="20"/>
                        </div>
                    </div>
                    <div className='container-for-modal' id={_id} onClick={() => handleClickContainer(_id)}>
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
                                <p className="list-number">{phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                    {checkbox.includes(_id) && (
                        <button
                            className="btn btn-primary btn-block btn-large"
                            type="button"
                            onClick={() => onDeleteContact(_id)}
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
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        })
    ),
    checkbox: PropTypes.arrayOf(PropTypes.string.isRequired),
    onDeleteContact: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleClickContainer: PropTypes.func.isRequired,
};