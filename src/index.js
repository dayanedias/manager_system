import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import reducers from './store/reducers';

function configureStore(preloadedState) {
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  return createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
}

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();