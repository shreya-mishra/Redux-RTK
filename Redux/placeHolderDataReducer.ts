const placeHolderReducer = (
  state = [],
  action: {type: string; payload: {data: any[]}},
) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, ...action.payload.data];
    case 'GET_DATA':
      return state;
    default:
      return state;
  }
};

export default placeHolderReducer;
