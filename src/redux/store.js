import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts/contacts-slice';
import { authReducer } from './Auth/auth-slice';
import { 
  persistStore, 
  persistReducer, 
  FLUSH, 
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  // whitelist: ['token', 'currentRoute'],
};


const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['selectedCheckedCheckbox'],
};


const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: persistReducer(contactsPersistConfig, contactReducer)
})


export const store = configureStore({ reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);










