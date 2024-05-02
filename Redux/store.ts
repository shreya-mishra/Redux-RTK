import {combineReducers, createStore} from 'redux';
import placeHolderReducer from './placeHolderDataReducer';

const myReducers = combineReducers({
  placeHolder: placeHolderReducer,
});
const store = createStore(myReducers);
export default store;
