import { createSlice } from "@reduxjs/toolkit";
import { addNewContact, getAllContacts, deleteContactById } from "./contactOperations";


export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectLoading = state => state.contacts.contacts.isLoading;


const contactsSlice = createSlice({

  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  
  },
  reducers: {
    onFilterChange: (state, {payload}) => {
      state.filter = payload    
    }
  },
  extraReducers: builder => {
    builder
    .addCase(addNewContact.pending, state => {
        state.contacts.isLoading = true;
        state.error = null;
    })
    .addCase(addNewContact.fulfilled, (state, {payload}) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(payload)
        state.error = null;
    })
    .addCase(addNewContact.rejected, (state, {payload}) => {
        state.contacts.isLoading = false;
        state.error = payload;
    })

    .addCase(getAllContacts.pending, state => {
      state.contacts.isLoading = true;
      state.error = null;
    })
    .addCase(getAllContacts.fulfilled, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.contacts.items = payload;
      state.error = null;
    })
    .addCase(getAllContacts.rejected,(state, {payload}) => {
      state.contacts.isLoading = false;
      state.error = payload; 
    })

    .addCase(deleteContactById.pending, state => {
      state.contacts.isLoading = true;
      state.error = null;
    })
    .addCase(deleteContactById.fulfilled, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(({id}) => id !== payload)
    })
    .addCase(deleteContactById.rejected, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.error = payload;
    })
  }
})



export const contactReducer = contactsSlice.reducer;
export const { onFilterChange } = contactsSlice.actions;
