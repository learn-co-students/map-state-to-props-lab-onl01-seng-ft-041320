import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers'


// add imports and code

const store = createStore(
  manageUsers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// use the `createStore` method from `redux` [x]
//passing in the  provided reducer, `manageUsers`, to create a `store`[x]
// Use `Provider` from `react-redux` to wrap `<App />`, [x]
//passing `store` as a prop to the `Provider`. [x]
//run npm start 
//does form appear? yes[x] no [] 
// make sure to add imports of create store and provider 
//in order to create store and pass the props