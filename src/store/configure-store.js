import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export const store = createStore(countReducer, applyMiddleware(thunk));