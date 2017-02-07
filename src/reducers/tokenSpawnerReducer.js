const tokenSpawnerReducer = (stats = [], action) => {
  switch (action.type) {
    case 'BUFF_TOKEN_POWER':
      return stats.set('power', stats.get('power') + 1)
    case 'BUFF_TOKEN_TOUGHNESS':
      return stats.set('toughness', stats.get('toughness') + 1)
    case 'DEBUFF_TOKEN_POWER':
      return stats.set('power', stats.get('power') - 1)
    case 'DEBUFF_TOKEN_TOUGHNESS':
      return stats.set('toughness', stats.get('toughness') - 1)
    default:
      return stats
  }
}

export default tokenSpawnerReducer;
