import { combineReducers } from "redux";

import lobbyReducer from "./lobby";
import placesReducer from "./places";

const rootReducer = combineReducers({
  lobby: lobbyReducer,
  places: placesReducer,
});

export default rootReducer;