import {createSlice} from '@reduxjs/toolkit';

const placeHolderSlice = createSlice({
  name: 'placeHolderData',
  initialState: [],
  reducers: {
    addPlaceHolderData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addPlaceHolderData} = placeHolderSlice.actions;
export default placeHolderSlice.reducer;
