export const selectContacts = state => state.contacts.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectLoading = state => state.contacts.contacts.isLoading;

export const selectCountryCode = state => state.contacts.selectedCountryCode;

export const selectCheckbox = state => state.contacts.selectedCheckedCheckbox;

export const selectItemIDForModal = state => state.contacts.selectedItemIDForModal;