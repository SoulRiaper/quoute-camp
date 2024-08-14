import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStorage } from './store/store';
import { Provider } from 'react-redux';

const store = configureStorage({quoute: {
  text: "gugu gaga",
  author: "Jason Statham"
}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
