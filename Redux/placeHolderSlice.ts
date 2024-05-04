import {createSlice} from '@reduxjs/toolkit';

const placeHolderSlice = createSlice({
  name: 'placeHolderData',
  initialState: {
    placeholderData: [],
    refreshToken: null,
    accessToken: null,
    authData: [],
  },
  reducers: {
    addPlaceHolderData: (state, action: any) => {
      console.log(action);
      state.placeholderData.push(action.payload.placeholderData);
    },
    setToken: (state, action) => {
      console.log('🚀 ~ action:', action);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    getToken: (state, action) => {
      return state;
    },
    addAuthData: (state, action) => {
      state.authData.push(action.payload.authData);
    },
  },
});

export const {addPlaceHolderData, getToken, setToken, addAuthData} =
  placeHolderSlice.actions;
export default placeHolderSlice.reducer;
