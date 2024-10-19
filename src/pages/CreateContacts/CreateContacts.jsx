import { Section } from 'components/Section/Section';
import { Containers } from 'components/Containers/Container';
import { CountrySearch } from "components/CountrySearch/CountrySearch";
import { Form } from 'components/Form/Form';
import { ContactsSum } from 'components/ContactsSum/Contacts.Sum';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/Contacts/contacts-operations';
import { useAuth } from 'hooks/useAuth';



const CreateContactsPage = () => {
  const {isLoggedIn} = useAuth();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllContacts());
    }
  },[dispatch, isLoggedIn])


  return(
    <Section>
      <Containers title={'Phonebook'}>
        <CountrySearch/>
        <Form />
        <ContactsSum/>
      </Containers>
    </Section>
  );
};


export default CreateContactsPage;
