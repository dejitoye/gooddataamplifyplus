const init = {
    msg:null
}


export const messageReducers = (state = init, action) => {
  switch (action.type) {
    case "MSGCOUNT":
      return {
          ...state,msg:action.payload
      };

    default:
      return state;
  }
};
