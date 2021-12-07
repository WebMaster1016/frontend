const initialState = {
    sideRoute: 'home',
    data: ''
}

const reducer = (state=initialState, action) => {
  const newState = {...state};

  if(action.type === 'routeChange'){
      const myData = action.payload;
      newState.sideRoute = myData['sideRoute'];
      newState.data = myData['data']['data'];
  }
  return newState;
}

export default reducer;