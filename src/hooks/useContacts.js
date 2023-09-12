import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectLoading, selectCountryCode } from "redux/Contacts/contacts-selectors";



export const useContacts = () => {
    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const countryCode = useSelector(selectCountryCode);

    return {
        isLoading,
        contacts,
        filter,
        countryCode,
    };
};