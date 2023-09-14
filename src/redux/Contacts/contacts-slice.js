import { createSlice } from "@reduxjs/toolkit";
import { addNewContact, getAllContacts, deleteContactById } from "./contacts-operations";


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  selectedCountryCode: '',
  selectedCheckedCheckbox: [],
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

    
  reducers: {
    onFilterChange: (state, {payload}) => {
      state.filter = payload    
    },

    setSelectedCountryCode: (state, {payload}) => {
      state.selectedCountryCode = payload;
    },

    toggleCheckboxState: (state, action) => {
      const { contactId } = action.payload;
      const isSelected = state.selectedCheckedCheckbox.includes(contactId);
      if (isSelected) {
        state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(id => id !== contactId);
      } else {
        state.selectedCheckedCheckbox.push(contactId);
      }
    },

    toggleSelectAllCheckbox: (state) => {
      const filteredContactIds = state.contacts.items.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(state.filter.toLowerCase()) ||
          contact.number.includes(state.filter)
        );
      }).map((contact) => contact.id);
  
      if (state.selectedCheckedCheckbox.length === filteredContactIds.length) {
        state.selectedCheckedCheckbox = [];
      } else {
        state.selectedCheckedCheckbox = [...filteredContactIds];
      }
    },

  },
  extraReducers: builder => {
    builder
    .addCase(addNewContact.pending, state => {
        state.contacts.isLoading = true;
        state.error = null;
    })
    .addCase(addNewContact.fulfilled, (state, {payload}) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(payload);
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
      state.selectedCheckedCheckbox = state.selectedCheckedCheckbox.filter(id => id !== payload);
    })
    .addCase(deleteContactById.rejected, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.error = payload;
    })
  }
})



export const contactReducer = contactsSlice.reducer;
export const { 
  onFilterChange, 
  setSelectedCountryCode, 
  toggleCheckboxState, 
  toggleSelectAllCheckbox 
} = contactsSlice.actions;
