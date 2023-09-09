import { Section } from 'components/Section/Section';
import { Containers } from 'components/Containers/Container';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/Contacts/contacts-operations';



const ContactsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts())
  })


  return(
    <Section>
      <Containers title={'Phonebook'}>
        <Form />
      </Containers>
      <Containers title={'Filter'}>
        <Filter/>
      </Containers>
      <Containers title={'Contacts'}>
        <Contacts/>
      </Containers>
    </Section>
  );
};


export default ContactsPage;
