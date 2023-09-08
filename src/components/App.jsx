import { Section } from './Section/Section';
import { Containers } from './Containers/Container';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/Contacts/operations';



export const App = () => {

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
