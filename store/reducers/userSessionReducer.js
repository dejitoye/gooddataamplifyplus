const init = {
    login:false
};

export const userSessionReducer = (state = init, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {...state,login:true};
      case "LOGOUT":
        return {...state,login:false};
  

    default:
      return state;
  }
};
