import { Section } from 'components/Section/Section';
import { Containers } from 'components/Containers/Container';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { RedirectLinkStyles } from './Contacts.styled';
import { NavLink } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';



const ContactsPage = () => {

    
    return(
        <>
            <Section>
                <RedirectLinkStyles>
                    <NavLink className='link btn btn-primary btn-block btn-large' to="/createcontacts">
                        Back to Ctreate
                    </NavLink>
                </RedirectLinkStyles>
                <Containers title={'Filter'}>
                    <Filter/>
                </Containers>
                <Containers title={'Contacts'}>
                    <Contacts/>
                </Containers>
            </Section>
            <Modal/>
        </>
    );
};


export default ContactsPage;