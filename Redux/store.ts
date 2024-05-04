import {combineReducers, createStore} from 'redux';
import placeHolderReducer from './placeHolderSlice';
import {configureStore} from '@reduxjs/toolkit';
import {fetchDataApi, fetchDataFromNetwork} from '../services/fetchApi';
import {pokemonApi} from '../services/pokemon';

const myReducers = combineReducers({
  placeHolder: placeHolderReducer,
});
// const store = createStore(myReducers);

const store = configureStore({
  reducer: {
    placeHolderReducer: placeHolderReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [fetchDataApi.reducerPath]: fetchDataApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      fetchDataApi.middleware,
    ),
});

export default store;
