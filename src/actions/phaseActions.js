export const nextPhase = () => {
  return (dispatch, getState) => {
    const nextPhase = getState().get('phase') + 1

    switch (nextPhase) {
      case 1: // Draw phase
        const deck = getState().get('deck')

        const nonTokenIdx = deck.findLastIndex((card) => {
          return card.getIn(['cardData', 'layout']) !== "token"
        })

        const number = deck.size - nonTokenIdx
        const cards = deck.slice(-number)

        dispatch({
          type: "REMOVE_CARDS_FROM_DECK",
          number
        })

        dispatch({
          type: "ADD_CARDS_TO_PENDING",
          cards
        })
    }
    dispatch({
      type: "NEXT_PHASE"
    })
  }
}
