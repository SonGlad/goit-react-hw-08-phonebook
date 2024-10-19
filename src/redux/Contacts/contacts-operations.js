import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, allContacts, removeContact, updateContact } from 'api/ApiContacts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const addNewContact = createAsyncThunk(
    'contacts/fetchAddNewContact',
    async (data, thunkApi) => {
        try {
            const response = await addContact(data);
            toast.success('Your contact has been successfully created');
            return response;
        } 
        catch (error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    } 
);


export const getAllContacts = createAsyncThunk(
    'contact/fetchAllContacts',
    async (_, thunkApi) => {
        try{
            const response = await allContacts();
            return response;
        } 
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }  
    }
);


export const deleteContactById = createAsyncThunk(
  'contacts/fetchDeleteContact',
    async (id, thunkApi) => {
        try{
            const response = await removeContact(id);
            toast.info('Your contact has been successfully deleted');
            return response;
        } 
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }  
    }
);


export const updateContactById = createAsyncThunk(
    'contacts/fetchUpdateContact',
    async ({id, name, phone}, thunkApi) => {
        const contact = {name, phone};
        try{
            const response = await updateContact(id, contact);
            toast.info('Your contact has been successfully updated');
            return response;
        } 
        catch(error){
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }  
    }
);
