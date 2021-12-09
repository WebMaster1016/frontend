let initialState = {
    sideRoute: 'home',
    data: '',
    recentClub: '',
    recentClubData: []
}

const reducer = (state=initialState, action) => {
  const newState = {...state};

  if(action.type === 'routeChange'){
      const myData = action.payload;
      newState.sideRoute = myData['sideRoute'];
      newState.data = myData['data']['data'];
  }else if(action.type === 'getClubData'){
      const myData = action.payload;
      newState.recentClub = myData['recentClub'];
      newState.recentClubData = myData['recentClubData'];
  }
  return newState;
}

export default reducer;