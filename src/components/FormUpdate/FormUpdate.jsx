import { UpdateFromStyles } from "./FormUpdate.styled";
import {ReactComponent as WorldIcon} from "../../images/world.svg";
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as PnoneIcon} from "../../images/phone.svg";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useContacts } from "hooks/useContacts";
import { nanoid } from 'nanoid';
import { countryCodes } from 'utils/countryCodes';
import { toast } from 'react-toastify';
import { updateContactById } from "redux/Contacts/contacts-operations";
import { getAllContacts } from 'redux/Contacts/contacts-operations';


countryCodes.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));


export const FormUpdate = (props) => {
    const dispatch = useDispatch();
    const {contacts, itemIDForModal} = useContacts();
    const [selectedCountryData, setSelectedCountryData] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(countryCodes);
    const [countryFilter, setCountryFilter] = useState('');
    const [isOptionsListActive, setIsOptionsListActive] = useState(false);
    const dropdownRef = useRef(null);
    const optionListRef = useRef(null); 



    // INITIAL DATA RENDER FOR INPUT FIELDS//
    const selectedContact = contacts.find((item) => item.id === itemIDForModal);
    const selectedNumber = selectedContact.number.split("-").slice(-4).join("");

    useEffect(() => {
        const setSelectedCountry = () => {
            const selectedCode = selectedContact.number.split("-").slice(0, 1).join("");
            const selectedCountry = countryCodes.find((country) => {
              const countryCode = country.split(':')[1].trim();
              return countryCode === selectedCode;
            });
        
            if (selectedCountry) {
              const [countryName, countryCallingCode] = selectedCountry.split(':').map((item) => item.trim());
              setSelectedCountryData(`${countryName}: ${countryCallingCode}`);
            }
        };
        
        setSelectedCountry();
    }, [selectedContact.number]);
    // /////////////////////////////////////



    // COUNTRY CHOOSE OPTION///////////////
    const handleCountrySelect = (countryCode) => {
        setCountryFilter(countryCode);
        setIsOptionsListActive(true);
    };  


    const handleFilterChange = (event) => {
        const filterValue = event.target.value.toLowerCase();
        setCountryFilter(filterValue);


        const filteredCountries = countryCodes.filter((countryCode) =>
            countryCode.toLowerCase().includes(filterValue)
        );
        setFilteredCountries(filteredCountries);
    };


    const handleInputClick = () => {
        setIsOptionsListActive(!isOptionsListActive);
    };


    useEffect(() => {
        setCountryFilter(selectedCountryData);
    }, [selectedCountryData]);


    const handleBackgroundClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOptionsListActive(false);
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, []);
    // ////////////////////////////////////



    // SUBMIT FORM////////////////////////
    const onFormUpdateSubmit = (event) => {
        event.preventDefault();
        const code = event.target.country.value;
        const name = event.target.name.value;
        const number = event.target.number.value;


        if (!/^\d+$/.test(number)) {
            toast.warning('Please enter a valid number.');
            return;
        }

        const codeValue = code.split(":")[1].trim();
        const digits = number.split("");
        const formattedNumber = `${digits.slice(0, 2).join('')}-${digits.slice(2, 5).join('')}-${digits.slice(5, 7).join('')}-${digits.slice(7, 9).join('')}`;
        const phoneNumber = `${codeValue }-${formattedNumber}`;


        const existedContact = {name: selectedContact.name, number: selectedContact.number}
        const contactData = {
            id: selectedContact.id,
            name,
            number: phoneNumber
        };


        if (contactData.name === existedContact.name && contactData.number === existedContact.number) {
            toast.warning(`You are trying to update unchanged data.`);
            return
        }


        dispatch(updateContactById(contactData))
        .then(() => {
          dispatch(getAllContacts());
          props.formShowUpdateForm();
        })
        .catch((error) => {
          console.error('Error updating contact:', error);
        });
        event.target.reset();
    };
    //////////////////////////////////////
    



    return(
        <UpdateFromStyles onSubmit={onFormUpdateSubmit}>
            <label className='label' htmlFor='country'>
                <div className='descr-div'>
                    <WorldIcon className="form-icon" width="30" height="25"/>
                    <span className="input-title">Country code</span>
                </div>
                <input className="input top-input" ref={dropdownRef}
                    type="text"
                    name="country"
                    title="Select a country, and its telephone code will be automatically added to your phone number"
                    required
                    placeholder='Choose your country'
                    id='country'
                    value={countryFilter}
                    onChange={handleFilterChange}
                    onClick={handleInputClick}
                />
            </label>
            <div className="descr-text-cont">
                <p className="descr-text above">&#8727; Select a country, and its phone code will be added to</p>
                <p className="descr-text below">your number automatically.</p>
            </div>
            <ul ref={optionListRef}
                className={`options-list ${isOptionsListActive ? 'options-list-active' : ''}`}>
                {filteredCountries.map((countryCode) => (
                    <li className="option" key={nanoid()}>
                    <button
                        type="button"
                        className="option-item"
                        onClick={(e) => {
                            e.stopPropagation(); 
                            handleCountrySelect(countryCode);
                            handleInputClick();
                        }}
                    >
                        {countryCode}
                    </button>
                    </li>
                ))}
            </ul>
            <label className='label' htmlFor='name'>
                <div className='descr-div'>
                    <UserIcon className="form-icon" width="30" height="25"/>
                    <span className="input-title">Username</span>
                </div>
                <input className="input"
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder='Rosie Simpson'
                    id='name'
                    defaultValue={selectedContact.name}
                />
            </label>
            <label className='label' htmlFor='number'>
                <div className='descr-div'>
                    <PnoneIcon className="form-icon" width="30" height="30"/>
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
                    defaultValue={selectedNumber}
                />
            </label>
            <p className="descr-text descr-text-lower">&#8727; Type the number in the format mentioned above only.</p>
            <button 
                className="btn-f btn-primary-f btn-block-f btn-large-f" 
                type='submit'
                >Update Contact
            </button>
        </UpdateFromStyles>
    );
};


