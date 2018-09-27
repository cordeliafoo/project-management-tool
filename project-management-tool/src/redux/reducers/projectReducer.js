import { combineReducers } from 'redux'
import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ADD_FEATURE,
  DELETE_FEATURE,
} from '../actions/index.js'

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

function addFeature(state = initialState.projects.byId, action) {
  const { payload } = action
  const { projectId, featureId } = payload

  switch (action.type) {
    case ADD_FEATURE:
      const project = state[projectId]
      let projectFeatures = []
      if (project.features) {
        projectFeatures = project.features
      }
      return {
        ...state,
        [projectId]: {
          ...project,
          features: projectFeatures.concat(featureId),
        },
      }
    default:
      return state
  }
}

function deleteFeature(state = initialState.projects.byId, action) {
  const { payload } = action
  const { projectId, featureId } = payload

  const project = state[projectId]

  return {
    ...state,
    [projectId]: {
      ...project,
      features: project.features.filter(item => item !== featureId),
    },
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
    case ADD_FEATURE:
      return addFeature(state, action)
    case DELETE_FEATURE:
      return deleteFeature(state, action)
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
