import { useDispatch } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Notification } from "components/Notification/Notification";
import { NotificationFilter } from "components/NotificationFilter/NotificationFilter";
import { deleteContactById } from 'redux/Contacts/contacts-operations';
import { useContacts } from 'hooks/useContacts';
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";



export const Contacts = () => {
    const {isLoading, contacts, filter} = useContacts();
    const dispatch = useDispatch();


    const filteredContacts = contacts.filter(contact => {
        return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter)
        );
    });
  

    const onDeleteContact = contactId  => {
        dispatch(deleteContactById(contactId));
    };


    const formattedContacts = filteredContacts.map(contact => (
        {...contact, number: formatPhoneNumber(contact.number)}
    ));


    if (isLoading) {
        return <p>Loading data...</p>
    }



    return (
        <>
            {contacts.length === 0 ? (
            <Notification message="There are no contacts in your list, sorry" />
            ) : filteredContacts.length > 0 ? (
            <ContactsList
                filteredContacts={formattedContacts}
                onDeleteContact={onDeleteContact}
            />
            ) : (
            <NotificationFilter notification="No contacts found that match the filter" />
            )}
        </>
    );
};
