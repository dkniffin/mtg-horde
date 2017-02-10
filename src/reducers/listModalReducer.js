import Immutable from 'immutable'

const listModalReducer = (listModal = Immutable.List(), action) => {
  switch (action.type) {
    case 'OPEN_LIST_MODAL':
      return listModal.concat(action.cards);
    case 'CLOSE_LIST_MODAL':
      return Immutable.List();
    default:
      return listModal;
  }
}

export default listModalReducer;
