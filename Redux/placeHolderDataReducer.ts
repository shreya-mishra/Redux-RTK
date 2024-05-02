const initialData = {
  data: [],
};

const placeHolderReducer = (
  state = [...initialData.data],
  action: {type: string; data: any},
) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, ...action.data];
    case 'GET_DATA':
      return state;
    default:
      return state;
  }
};

export default placeHolderReducer;
