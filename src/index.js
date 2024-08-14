import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStorage } from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import { UPDATE_QUOUTE } from './actions/types';

const store = configureStorage();

store.dispatch({type: UPDATE_QUOUTE, quoute: { text: "123123", author: "1231231231231"}})

console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
