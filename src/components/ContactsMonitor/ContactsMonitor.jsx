import PropTypes from 'prop-types';
import { ContactsMonitorStyles } from './ContactsMonitor.styled';
import {ReactComponent as CheckedIcon} from "../../images/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../images/rectangle.svg";


export const ContactsMonitor = ({Checked, handleDeleteAllSelected, handleSelectAllChange, checkbox}) => {


    return (
        <ContactsMonitorStyles>
            <div className='selects-checkbox-container'>
                <input className="checkbox"
                type="checkbox"
                name="user_agreement" 
                id="selectAllCheckbox"
                checked={Checked}
                onChange={() => handleSelectAllChange()}
                />
                <div className='custon-data'>
                    <div className="custom-checkbox">
                        <CheckBoxIcon className="custom-checkbox-before" width="20" height="20"/>
                        <CheckedIcon className="custom-checkbox-after" width="20" height="20"/>
                    </div>
                    <p className='all-text'>All</p>
                </div>
            </div>
            <div className='selects-container'>
                {checkbox.length === 0 ?(<p>Select Contacts</p>) : 
                (<p>Selected: {checkbox.length}</p>
                )}
            </div>
            {Checked ? (
            <div className='button-container'> 
                <button type="button"
                    className="btn btn-primary btn-block btn-large"
                    onClick={() => handleDeleteAllSelected()}
                    >Delete All
                </button>
            </div>
            ) : null}
        </ContactsMonitorStyles>
    );
};



ContactsMonitor.propTypes = {
    Checked: PropTypes.bool.isRequired,
    handleDeleteAllSelected: PropTypes.func.isRequired,
    handleSelectAllChange: PropTypes.func.isRequired,
    checkbox: PropTypes.arrayOf(PropTypes.string.isRequired),
};