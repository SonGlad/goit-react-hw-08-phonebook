import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/slice';


const rootReducer = combineReducers({
  contacts: contactReducer
})


export const store = configureStore({ reducer: rootReducer});










