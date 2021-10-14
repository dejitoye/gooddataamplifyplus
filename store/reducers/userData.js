const init = {
   userdata:null
}


export const userData = (state = init, action) => {
  switch (action.type) {
    case "USERDATA":
      return {...state,userdata:action.payload}

    default:
      return state;
  }
};
