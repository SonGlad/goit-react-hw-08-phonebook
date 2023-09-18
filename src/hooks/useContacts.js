import { useSelector } from 'react-redux';
import { 
    selectContacts, 
    selectFilter, 
    selectLoading, 
    selectCountryCode,
    selectCheckbox,
    selectItemIDForModal,
} from "redux/Contacts/contacts-selectors";



export const useContacts = () => {
    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const countryCode = useSelector(selectCountryCode);
    const checkbox = useSelector(selectCheckbox);
    const itemIDForModal = useSelector(selectItemIDForModal);

    return {
        isLoading,
        contacts,
        filter,
        countryCode,
        checkbox,
        itemIDForModal,
    };
};