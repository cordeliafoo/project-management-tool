export const ADD_PROJECT = 'ADD_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

export const ADD_FEATURE = 'ADD_FEATURE'
export const EDIT_FEATURE = 'EDIT_FEATURE'
export const DELETE_FEATURE = 'DELETE_FEATURE'

let nextProjectId = 4

export function addProject(text) {
  return {
    type: ADD_PROJECT,
    payload: {
      projectId: `project${nextProjectId++}`,
      title: text,
    },
  }
}

export function editProject(projectId, text) {
  return {
    type: EDIT_PROJECT,
    payload: {
      projectId: projectId,
      title: text,
    },
  }
}

export function deleteProject(projectId) {
  return { type: DELETE_PROJECT, payload: { projectId: projectId } }
}

export function addFeature(projectId, featureId, text) {
  return {
    type: ADD_FEATURE,
    payload: {
      projectId: projectId,
      featureId: featureId,
      title: text,
    },
  }
}

export function editFeature(projectId, featureId, text) {
  return {
    type: EDIT_FEATURE,
    payload: {
      projectId: projectId,
      featureId: featureId,
      title: text,
    },
  }
}

export function deleteFeature(projectId, featureId) {
  return {
    type: DELETE_PROJECT,
    payload: { projectId: projectId, featureId: featureId },
  }
}
