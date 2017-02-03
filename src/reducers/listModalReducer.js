const listModalReducer = (listModal = [], action) => {
  switch (action.type) {
    case "OPEN_LIST_MODAL":
      return listModal.concat(action.cards);
    case "CLOSE_LIST_MODAL":
      return [];
    default:
      return listModal;
  }
}

export default listModalReducer;
