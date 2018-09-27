import { combineReducers } from 'redux'
import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
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
        features: ['feature1', 'feature2'],
      },
      project3: {
        id: 'project3',
        title: 'project3',
        features: ['feature1', 'feature2'],
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
    },
    allIds: ['feature1'],
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

function addProjectEntry(state, action) {
  const { payload } = action
  const { projectId, title } = payload

  // Create new Project object
  const project = { id: projectId, title: title }

  // Insert new Project object
  return {
    ...state,
    [projectId]: project,
  }
}

function editProjectEntry(state, action) {
  const { payload } = action
  const { projectId, title } = payload

  // Find selected Project object
  const project = state[projectId]
  project.title = title

  // Edit Project title
  return {
    ...state,
    [projectId]: project,
  }
}
function deleteProjectEntry(state, action) {
  const { payload } = action
  const { projectId } = payload

  const project = state[projectId]

  let newState = Object.keys(state)
    .filter(key => key !== projectId)
    .reduce((result, current) => {
      result[current] = state[current]
      return result
    }, {})
  return {
    ...newState,
  }
}

function byProjectId(state = initialState.projects.byId, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return addProjectEntry(state, action)
    case EDIT_PROJECT:
      return editProjectEntry(state, action)
    case DELETE_PROJECT:
      return deleteProjectEntry(state, action)
    default:
      return state
  }
}

function addProjectId(state, action) {
  const { payload } = action
  const { projectId } = payload

  // Append new Project Id to the list of Project Ids
  return state.concat(projectId)
}

function allProjectIds(state = initialState.projects.allIds, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return addProjectId(state, action)
    default:
      return state
  }
}

const projectReducer = combineReducers({
  byProjectId: byProjectId,
  allProjectIds: allProjectIds,
})

export default projectReducer
