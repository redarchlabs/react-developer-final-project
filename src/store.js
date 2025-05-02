// store.js
import { createStore } from 'redux';
import bookingReducer from './reducers/bookingReducer';

const store = createStore(bookingReducer);

export default store;
