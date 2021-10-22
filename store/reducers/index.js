import { combineReducers } from "redux";
import { friendReducer } from "./friendsReducer";
import { messageReducers } from "./messageReducer";
import { sampleReducers } from "./sampleReducers";
import { userData } from "./userData";
import { userSessionReducer } from "./userSessionReducer";
import { utilsReducer } from "./utilsReducer";



export default combineReducers({
    sample:sampleReducers,
    userSession:userSessionReducer,
    utils:utilsReducer,
  friend:friendReducer,
  userdata:userData,
  message:messageReducers,
  devTools:false
}
)