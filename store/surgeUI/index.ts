import { combineReducers } from 'redux'

import getNFTCollectionReducer from './getNFTCollection'
import getNFTCollectionsReducer from './getNFTCollections'
import getVaultReducer from './getVault'

const surgeUIReducer = combineReducers({
  getNFTCollections: getNFTCollectionsReducer,
  getNFTCollection: getNFTCollectionReducer,
  getVault: getVaultReducer,
})
export default surgeUIReducer
