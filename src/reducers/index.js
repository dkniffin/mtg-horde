import { combineReducers } from "redux-immutable"

import deck from "./deckReducer"
import graveyard from "./graveyardReducer"
import exile from "./exileReducer"
import permanents from "./permanentsReducer"
import phase from "./phaseReducer"
import pending from "./pendingReducer"
import hand from "./handReducer"
import cardModal from "./cardModalReducer"

export default combineReducers({
  deck,
  pending,
  graveyard,
  exile,
  permanents,
  hand,
  phase,
  cardModal
})
