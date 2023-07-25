import { combineReducers } from 'redux'

import vaultReducer from './vault'

const thegraphReducer = combineReducers({ vault: vaultReducer })
export default thegraphReducer
