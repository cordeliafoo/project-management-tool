import { combineReducers } from 'redux'

import { ADD_FEATURE, EDIT_FEATURE, DELETE_FEATURE } from '../actions/index.js'

const initialState = {
  projects: {
    byId: {
      project1: {
        id: 'project1',
        title: 'project1',
        features: ['feature1'],
      },
      project2: {
        id: 'project2',
        title: 'project2',
        features: ['feature3'],
      },
      project3: {
        id: 'project3',
        title: 'project3',
      },
    },
    allIds: ['project1', 'project2', 'project3'],
  },
  features: {
    byId: {
      feature1: {
        id: 'feature1',
        title: 'feature1',
        todos: ['todo1', 'todo2'],
      },
      feature2: {
        id: 'feature2',
        title: 'feature2',
        todos: ['todo1', 'todo2'],
      },
      feature3: {
        id: 'feature3',
        title: 'feature3',
        todos: ['todo1', 'todo2'],
      },
    },
    allIds: ['feature1', 'feature2', 'feature3'],
  },
  todos: {
    byId: {
      todo1: {
        id: 'todo1',
        title: 'todo1',
        completed: true,
      },
    },
    allIds: ['todo1'],
  },
}

function addFeatureEntry(state, action) {
  const { payload } = action
  const { featureId, title } = payload

  // Create new Feature object
  const feature = { id: featureId, title: title }
  return {
    ...state,
    [featureId]: feature,
  }
}

function editFeatureEntry(state, action) {
  const { payload } = action
  const { featureId, title } = payload

  // Find selected Feature object
  const feature = state[featureId]
  feature.title = title

  // Edit Feature title
  return {
    ...state,
    [featureId]: feature,
  }
}

function deleteFeatureEntry(state, action) {
  const { payload } = action
  const { featureId } = payload

  let newState = Object.keys(state)
    .filter(key => key !== featureId)
    .reduce((result, current) => {
      result[current] = state[current]
      return result
    }, {})
  return {
    ...newState,
  }
}

function byFeatureId(state = initialState.features.byId, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return addFeatureEntry(state, action)
    case EDIT_FEATURE:
      return editFeatureEntry(state, action)
    case DELETE_FEATURE:
      return deleteFeatureEntry(state, action)
    default:
      return state
  }
}

function addFeatureId(state, action) {
  const { payload } = action
  const { featureId } = payload

  // Append new Feature Id to the list of Feature Ids
  return state.concat(featureId)
}

function allFeatureIds(state = initialState.features.allIds, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return addFeatureId(state, action)
    default:
      return state
  }
}

const featureReducer = combineReducers({
  byFeatureId: byFeatureId,
  allFeatureIds: allFeatureIds,
})

export default featureReducer
