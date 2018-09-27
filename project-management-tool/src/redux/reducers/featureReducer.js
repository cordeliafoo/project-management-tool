import { combineReducers } from 'redux'

import {
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
  ADD_TODO,
  DELETE_TODO,
} from '../actions/index.js'

const initialState = {
  projects: {
    byId: {
      project1: {
        id: 'project1',
        title: 'project1',
        features: ['feature1', 'feature2'],
      },
      project2: {
        id: 'project2',
        title: 'project2',
      },
    },
    allIds: ['project1', 'project2'],
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
      },
    },
    allIds: ['feature1', 'feature2'],
  },
  todos: {
    byId: {
      todo1: {
        id: 'todo1',
        title: 'todo1',
        completed: false,
      },
      todo2: {
        id: 'todo2',
        title: 'todo2',
        completed: false,
      },
    },
    allIds: ['todo1', 'todo2'],
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

function addTodo(state = initialState.features.byId, action) {
  const { payload } = action
  const { featureId, todoId } = payload

  switch (action.type) {
    case ADD_TODO:
      const feature = state[featureId]
      let featureTodos = []
      if (feature.todos) {
        featureTodos = feature.todos
      }
      return {
        ...state,
        [featureId]: {
          ...feature,
          todos: featureTodos.concat(todoId),
        },
      }
    default:
      return state
  }
}

function deleteTodo(state = initialState.features.byId, action) {
  const { payload } = action
  const { featureId, todoId } = payload

  const feature = state[featureId]

  return {
    ...state,
    [featureId]: {
      ...feature,
      todos: feature.todos.filter(item => item !== todoId),
    },
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
    case ADD_TODO:
      return addTodo(state, action)
    case DELETE_TODO:
      return deleteTodo(state, action)

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
