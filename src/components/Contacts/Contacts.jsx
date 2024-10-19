import { ContactsList } from 'components/ContactsList/ContactsList';
import { Notification } from "components/Notification/Notification";
import { NotificationFilter } from "components/NotificationFilter/NotificationFilter";
import { DataLoading } from 'components/CustomLoaders/CustomLoaders';
import { ContactsMonitor } from 'components/ContactsMonitor/ContactsMonitor';
import { deleteContactById } from 'redux/Contacts/contacts-operations';
import { toggleCheckboxState, toggleSelectAllCheckbox, setSelectedItemIDForModal } from 'redux/Contacts/contacts-slice';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';



export const Contacts = () => {
    const {isLoading, contacts, filter, checkbox} = useContacts();
    const dispatch = useDispatch();


    const filteredContacts = contacts.filter(contact => {
        return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.phone.includes(filter)
        );
    });
  

    const onDeleteContact = contactId  => {
        dispatch(deleteContactById(contactId));
    };


      
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


    const Checked = checkbox.length > 0 && checkbox.length === filteredContacts.length;


    if (isLoading) {
        return <DataLoading/>
    }


    const handleClickContainer = (itemId) => {
        dispatch(setSelectedItemIDForModal(itemId));
    };



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
                filteredContacts={filteredContacts}
                onDeleteContact={onDeleteContact}
                checkbox={checkbox}
                handleCheckboxChange={handleCheckboxChange}
                handleClickContainer={handleClickContainer}
            />
            ) : (
            <NotificationFilter notification="No contacts found that match the filter" />
            )}
        </>
    );
};
