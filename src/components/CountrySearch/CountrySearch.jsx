import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { countryCodes } from 'utils/countryCodes';
import { CountrySearchStyled } from './CountrySearch.styled';
import {ReactComponent as WorldIcon} from "../../images/world.svg";
import { useDispatch } from "react-redux";
import {setSelectedCountryCode} from "../../redux/Contacts/contacts-slice";


countryCodes.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));


export const CountrySearch = () => {
    const dispatch = useDispatch();
    const [filteredCountries, setFilteredCountries] = useState(countryCodes);
    const [countryFilter, setCountryFilter] = useState('');
    const [isOptionsListActive, setIsOptionsListActive] = useState(false);
    const dropdownRef = useRef(null);
    const optionListRef = useRef(null);



    const handleCountrySelect = (countryCode) => {
        setCountryFilter(countryCode);
        setIsOptionsListActive(true);
        dispatch(setSelectedCountryCode(countryCode));
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


    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            setIsOptionsListActive(false);
        }
    };

    const handleBackgroundClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOptionsListActive(false);
        }
    };


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleBackgroundClick);
        };
    }, []);



    return (
        <CountrySearchStyled className="item-select time">
            <div className='icon-cont'>
                <WorldIcon className="icon" width="30" height="25"/>
                <p className="text-search">Country code</p>
            </div>
            <div className="custom-select" ref={dropdownRef}>
                <form className="country-form">
                    <label className="label" htmlFor="countryfilter">
                    <input
                        className="input"
                        type="text"
                        name="countryfilter"
                        title="Select a country, and its telephone code will be automatically added to your phone number"
                        required
                        placeholder="Choose your country"
                        id="countryfilter"
                        value={countryFilter}
                        onChange={handleFilterChange}
                        onClick={handleInputClick}
                    />
                    </label>
                </form>
                <p className="descr-text above">&#8727; Select a country, and its phone code will be added to</p>
                <p className="descr-text below">your number automatically.</p>
                <ul ref={optionListRef}
                    className={`options-list ${isOptionsListActive ? 'options-list-active' : ''}`}>
                    {filteredCountries.map((countryCode) => (
                        <li className="option" key={nanoid()}>
                        <button
                            type="button"
                            className="option-item"
                            onClick={() => handleCountrySelect(countryCode)}
                        >
                            {countryCode}
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        </CountrySearchStyled>
    );
};













// КОД ДЛЯ ИСПОЛЬЗОАВНИЯ ХУКА ПОД РЕНДЕР ПО УСЛОВИЮ


// import { useState, useEffect, useRef } from 'react';
// import { nanoid } from 'nanoid';
// import { countryCodes } from 'utils/countryCodes';
// import { CountrySearchStyled } from './CountrySearch.styled';
// import {ReactComponent as WorldIcon} from "../../images/world.svg";
// import { useDispatch } from "react-redux";
// import {setSelectedCountryCode} from "../../redux/Contacts/contacts-slice";


// countryCodes.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));


// export const CountrySearch = () => {
//     const dispatch = useDispatch();
//     const [filteredCountries, setFilteredCountries] = useState(countryCodes);
//     const [countryFilter, setCountryFilter] = useState('');
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//     const dropdownRef = useRef(null);



//     const handleCountrySelect = (countryCode) => {
//         setCountryFilter(countryCode);
//         setIsDropdownVisible(true);
//         dispatch(setSelectedCountryCode(countryCode));
//     };    


//     const handleFilterChange = (event) => {
//         const filterValue = event.target.value.toLowerCase();
//         setCountryFilter(filterValue);


//         const filteredCountries = countryCodes.filter((countryCode) =>
//             countryCode.toLowerCase().includes(filterValue)
//         );
//         setFilteredCountries(filteredCountries);
//     };


//     const handleInputClick = () => {
//         setIsDropdownVisible(!isDropdownVisible);
//     };


//     const handleKeyPress = (event) => {
//         if (event.key === 'Escape') {
//             setIsDropdownVisible(false);
//         }
//     };

//     const handleBackgroundClick = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setIsDropdownVisible(false);
//         }
//     };


//     useEffect(() => {
//         document.addEventListener('keydown', handleKeyPress);
//         document.addEventListener('click', handleBackgroundClick);

//         return () => {
//             document.removeEventListener('keydown', handleKeyPress);
//             document.removeEventListener('click', handleBackgroundClick);
//         };
//     }, []);



//     return (
//         <CountrySearchStyled className="item-select time">
//             <div className='icon-cont'>
//                 <WorldIcon className="icon" width="30" height="25"/>
//                 <p className="text-search">Country code</p>
//             </div>
//             <div className="custom-select" ref={dropdownRef}>
//                 <form className="country-form">
//                     <label className="label" htmlFor="countryfilter">
//                     <input
//                         className="input"
//                         type="text"
//                         name="countryfilter"
//                         title="Select a country, and its telephone code will be automatically added to your phone number"
//                         required
//                         placeholder="Choose your country"
//                         id="countryfilter"
//                         value={countryFilter}
//                         onChange={handleFilterChange}
//                         onClick={handleInputClick}
//                     />
//                     </label>
//                 </form>
//                 {isDropdownVisible && (
//                     <ul className='options-list'>
//                         {filteredCountries.map((countryCode) => (
//                             <li className="option" key={nanoid()}>
//                             <button
//                                 type="button"
//                                 className="option-item"
//                                 onClick={() => handleCountrySelect(countryCode)}
//                             >
//                                 {countryCode}
//                             </button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </CountrySearchStyled>
//     );
// };



