import { combineReducers } from 'redux'

import getAnalyticsReducer from './getAnalytics'
import getNFTCollectionReducer from './getNFTCollection'
import getNFTCollectionsReducer from './getNFTCollections'
import getVaultReducer from './getVault'

const surgeUIReducer = combineReducers({
  getNFTCollections: getNFTCollectionsReducer,
  getNFTCollection: getNFTCollectionReducer,
  getVault: getVaultReducer,
  getAnalytics: getAnalyticsReducer,
})
export default surgeUIReducer
