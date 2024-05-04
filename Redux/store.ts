import {combineReducers, createStore} from 'redux';
import placeHolderReducer from './placeHolderSlice';
import {configureStore} from '@reduxjs/toolkit';

const myReducers = combineReducers({
  placeHolder: placeHolderReducer,
});
// const store = createStore(myReducers);

const store = configureStore({
  reducer: {placeHolderReducer: placeHolderReducer},
});
export default store;
