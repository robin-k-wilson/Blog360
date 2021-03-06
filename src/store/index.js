import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import page from './page.js';
import hide from './hide.js';

const reducer = combineReducers({
  page,
  hide,
});

const loggerMiddleware = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;
export * from './page.js';
export * from './hide.js';