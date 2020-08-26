import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import App from './App';

import reducers from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
