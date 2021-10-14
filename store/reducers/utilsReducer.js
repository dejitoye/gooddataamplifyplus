const init = {
    inputmodal:false,
    friendID :null,
    myid:null
};

export const utilsReducer = (state = init, action) => {
  switch (action.type) {
    case "OPENMODAL":
      return {...state,inputmodal:true};
      case "CLOSEMODAL":
        return {...state,inputmodal:false};
  
        case "ADDFRIENDID":
          console.log("friendmeeee",action.payload)
        return {...state,friendID:action.payload}

        case"MYID":
        return{...state,myid:action.payload}

    default:
      return state;
  }
};
