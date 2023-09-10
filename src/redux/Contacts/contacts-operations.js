import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, allContacts, removeContact } from 'api/apiContacts';


export const addNewContact = createAsyncThunk(
    'contacts/fetchAddNewContact',
    async (data, thunkApi) => {
        try {
            const response = await addContact(data);
            return response;
        } 
        catch (error) {
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
            return thunkApi.rejectWithValue(error.message);
        }  
    }
);


export const deleteContactById = createAsyncThunk(
  'contacts/fetchDeleteContact',
    async (id, thunkApi) => {
        try{
            const response = await removeContact(id);
            return response.id;
        } 
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }  
    }
);
