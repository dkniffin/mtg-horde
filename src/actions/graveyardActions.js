import shuffle from 'array-shuffle'
import Immutable from 'immutable'

export const exileCards = (number) =>
  (dispatch, getState) => {
    const graveyard = getState().get('graveyard')
    const shuffled = Immutable.List(shuffle(graveyard.toArray()))
    const exiledCards = shuffled.slice(-number);
    dispatch({
      type: 'REMOVE_CARDS_FROM_GRAVEYARD',
      cards: exiledCards
    })

    dispatch({
      type: 'EXILE_CARDS',
      cards: exiledCards
    })
  }


export const openGraveyardModal = () =>
  (dispatch, getState) => {
    const cards = getState().get("graveyard");
    dispatch({
      type: 'OPEN_LIST_MODAL',
      cards
    })
  }

export const closeGraveyardModal = (location, card) =>
  (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_LIST_MODAL'
    })
  }
