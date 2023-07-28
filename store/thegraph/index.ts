import { combineReducers } from 'redux'

import traderReducer from './trader'
import vaultReducer from './vault'

const thegraphReducer = combineReducers({ vault: vaultReducer, trader: traderReducer })
export default thegraphReducer
