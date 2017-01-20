import { combineReducers } from "redux-immutable";

import deck from "./deckReducer";
import graveyard from "./graveyardReducer";

export default combineReducers({
  deck,
  graveyard
})
