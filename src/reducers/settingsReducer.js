import Immutable from 'immutable'

const settingReducer = (settings = Immutable.Map(), action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return Immutable.fromJS(action.settings)
    default:
      return settings
  }
}

export default settingReducer;
