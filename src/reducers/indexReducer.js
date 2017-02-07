const indexReducer = (index = [], action) => {
  switch (action.type) {
    case 'INC_INDEX':
      return index + 1
    default:
      return index
  }
}

export default indexReducer;
