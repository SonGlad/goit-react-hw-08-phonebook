import { ContactsList } from 'components/ContactsList/ContactsList';
import { Notification } from "components/Notification/Notification";
import { NotificationFilter } from "components/NotificationFilter/NotificationFilter";
import { DataLoading } from 'components/CustomLoaders/CustomLoaders';
import { ContactsMonitor } from 'components/ContactsMonitor/ContactsMonitor';
import { deleteContactById } from 'redux/Contacts/contacts-operations';
import { toggleCheckboxState, toggleSelectAllCheckbox } from 'redux/Contacts/contacts-slice';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';



export const Contacts = () => {
    const {isLoading, contacts, filter, checkbox} = useContacts();
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
    
    
    const handleCheckboxChange = (contactId) => {
        dispatch(toggleCheckboxState({ contactId }));
    };


    const handleSelectAllChange = () => {
        dispatch(toggleSelectAllCheckbox());
    };


    const handleDeleteAllSelected = () => {
        checkbox.forEach((contactId) => {
          onDeleteContact(contactId);
        });
    };


    const Checked = checkbox.length > 0 && checkbox.length === formattedContacts.length;


    if (isLoading) {
        return <DataLoading/>
    }



    return (
        <>
            <ContactsMonitor
                Checked={Checked}
                handleDeleteAllSelected={handleDeleteAllSelected}
                handleSelectAllChange={handleSelectAllChange}
                checkbox={checkbox}
            />
            {contacts.length === 0 ? (
            <Notification message="There are no contacts in your list, sorry" />
            ) : filteredContacts.length > 0 ? (
            <ContactsList
                filteredContacts={formattedContacts}
                onDeleteContact={onDeleteContact}
                checkbox={checkbox}
                handleCheckboxChange={handleCheckboxChange}
            />
            ) : (
            <NotificationFilter notification="No contacts found that match the filter" />
            )}
        </>
    );
};
