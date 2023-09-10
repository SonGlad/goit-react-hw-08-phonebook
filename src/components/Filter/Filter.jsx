import { FilterStyle } from "./Filter.styled";
import { useDispatch } from 'react-redux';
import { onFilterChange } from "redux/Contacts/contacts-slice";
import { useContacts } from "hooks/useContacts";



export const Filter = () => {
    const {filter} = useContacts();
    const dispatch = useDispatch();

  
    const handleFilterChange = (event) => {
      dispatch(onFilterChange(event.target.value));
    };



    return(
        <FilterStyle>
            <label className='label' htmlFor="filter">
                <input className="input"
                    type="text"
                    name="filter"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder=''
                    value={filter}
                    onChange={handleFilterChange}
                    >
                </input>
            </label>
        </FilterStyle>
    );
};






