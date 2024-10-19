import { createPortal } from "react-dom";
import { BackdropModalStyle } from "./Modal.styled";
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as PnoneIcon} from "../../images/phone.svg";
import {ReactComponent as CloseIcon} from "../../images/close.svg";
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from "hooks/useContacts";
import { clearSelectedItemIDForModal } from "redux/Contacts/contacts-slice";
import { deleteContactById } from 'redux/Contacts/contacts-operations';
import { FormUpdate } from "components/FormUpdate/FormUpdate";


const modalRoot = document.querySelector('#modal-root');


export const Modal = () => {
    const dispatch = useDispatch();
    const {contacts, itemIDForModal} = useContacts();
    const [showModal, setShowModal] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const modalRef = useRef(null);


    const selectedContact = contacts.find((item) => item._id === itemIDForModal);


    useEffect(() => {
        if (itemIDForModal) {
          setShowModal(true);
          setShowUpdateForm(false);
        } else {
          setShowModal(false);
        }

        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        
        const handleBackgroundClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };
        

        const closeModal = () => {
            dispatch(clearSelectedItemIDForModal(""));
        };


        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);
      
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          document.removeEventListener('click', handleBackgroundClick);
        };
    }, [dispatch, itemIDForModal]);


    if (!selectedContact) {
        return
    }


    const onDeleteContact = contactId  => {
        dispatch(deleteContactById(contactId));
        setShowModal(false);
    };


    const toggleUpdateForm = () => {
        setShowUpdateForm(prevShowUpdateForm => !prevShowUpdateForm);
    };
    const handleUpdateFormOpen = () => {
        toggleUpdateForm();
    };


    const formShowUpdateForm = () => {
        setShowUpdateForm(false);
    };



    return createPortal(
        showModal && (
            <BackdropModalStyle>
                <div className={`modal ${showUpdateForm ? 'modal-open-for-form' : ''}`} ref={modalRef}>
                    <button type="button" className="close-btn"  onClick={() => dispatch(clearSelectedItemIDForModal())}>
                        <CloseIcon className="close-icon" width="35" height="35"/>
                    </button>
                    <div className="info-container">
                        <div className="user-container">
                            <div className="cont-sum">
                                <UserIcon className="icon" width="30" height="25"/>
                                <p className="title-user">User:</p>
                            </div>
                            <div className="list-name-container">
                                <p className="list-name">{selectedContact.name}</p>:
                            </div>
                        </div>
                        <div className="number-container">
                            <div className="cont-sum">
                                <PnoneIcon className="icon" width="30" height="25"/>
                                <p className="title-number">Number:</p>
                            </div>
                            <div className="list-number-container">
                                <p className="list-number">{selectedContact.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-cont">
                        <button
                            className="btn btn-primary btn-block btn-large"
                            type="button"
                            onClick={() => onDeleteContact(selectedContact._id)}
                            >Delete
                        </button>
                        <button
                            className="btn btn-primary btn-block btn-large"
                            type="button"
                            onClick={handleUpdateFormOpen}
                            >Update
                        </button>
                    </div> 
                    <div className={`update-form ${showUpdateForm ? 'update-form-visible' : ''}`}>
                        <FormUpdate formShowUpdateForm={formShowUpdateForm}/>
                    </div>
                </div>
            </BackdropModalStyle>
        ),
        modalRoot
    );
};