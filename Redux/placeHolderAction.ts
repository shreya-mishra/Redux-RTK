export const addPlaceHolderData = (data: any) => {
  return {
    type: 'ADD_DATA',
    payload: data,
  };
};

export const getPlaceHolderData = () => {
  return {
    type: 'GET_DATA',
  };
};
