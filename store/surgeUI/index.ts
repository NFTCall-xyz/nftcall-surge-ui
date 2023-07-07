import { combineReducers } from 'redux'

import getNFTCollectionReducer from './getNFTCollection'
import getNFTCollectionsReducer from './getNFTCollections'
import getVaultReducer from './getVault'
import getAnalyticsReducer from './getAnalytics'

const surgeUIReducer = combineReducers({
  getNFTCollections: getNFTCollectionsReducer,
  getNFTCollection: getNFTCollectionReducer,
  getVault: getVaultReducer,
  getAnalytics: getAnalyticsReducer,
})
export default surgeUIReducer
