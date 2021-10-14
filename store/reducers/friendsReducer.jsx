const init = {
    friendlist : null
};

export const friendReducer = (state = init, action) => {
  switch (action.type) {
    case "FRIEND":
      return {...state, friendlist:action.payload}

    default:
      return state;
  }
};
