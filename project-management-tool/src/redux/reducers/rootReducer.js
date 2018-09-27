import { combineReducers } from 'redux'
import projectReducer from './projectReducer.js'
import featureReducer from './featureReducer.js'
import todoReducer from './todoReducer.js'

export default combineReducers({
  projectReducer,
  featureReducer,
  todoReducer,
})
