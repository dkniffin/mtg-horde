import { combineReducers } from "redux-immutable"

import deck from "./deckReducer"
import graveyard from "./graveyardReducer"
import exile from "./exileReducer"
import creatures from "./creaturesReducer"

export default combineReducers({
  deck,
  graveyard,
  exile,
  creatures
})
