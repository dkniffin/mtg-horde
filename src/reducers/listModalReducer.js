const listModalReducer = (listModal = [], action) => {
  switch (action.type) {
    case "OPEN_LIST_MODAL":
      console.log('>here', action.cards);
      return listModal.concat(action.cards);
    case "CLOSE_LIST_MODAL":
      return listModal;
    default:
      return listModal;
  }
}

export default listModalReducer;
