// redux have pure functions and redux toolkit doesnt have that
// RTK gives both actions and reducers combine, you can write it in createSlice file
const placeHolderReducer = (
  state = ['data'],
  action: {type: string; payload: []},
) => {
  console.log('🚀 ~ action:', action);
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, ...action.payload];
    case 'GET_DATA':
      return state;
    default:
      return state;
  }
};

export default placeHolderReducer;
