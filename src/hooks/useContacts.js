import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectLoading } from "redux/Contacts/contacts-selectors";



export const useContacts = () => {
    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    return {
        isLoading,
        contacts,
        filter,
    };
};