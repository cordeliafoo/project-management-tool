import { combineReducers } from 'redux'
import projectReducer from './projectReducer.js'
import featureReducer from './featureReducer.js'

export default combineReducers({
  projectReducer,
  featureReducer,
})
