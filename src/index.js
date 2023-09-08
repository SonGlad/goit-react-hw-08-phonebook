import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'globalStyles/GlobalStyles.styled';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
        <App /> 
    </Provider>
  </React.StrictMode>
);
