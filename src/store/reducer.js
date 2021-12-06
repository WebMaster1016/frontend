const initialState = {
    sideRoute: 'home'
}

const reducer = (state=initialState, action) => {
  const newState = {...state};

  if(action.type === 'routeChange'){
      newState.sideRoute = action.payload;
  }
  return newState;
}

export default reducer;