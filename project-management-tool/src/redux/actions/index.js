export const ADD_PROJECT = 'ADD_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

export const ADD_FEATURE = 'ADD_FEATURE'
export const EDIT_FEATURE = 'EDIT_FEATURE'
export const DELETE_FEATURE = 'DELETE_FEATURE'

let nextProjectId = 4
let nextFeatureId = 4

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

export function addFeature(text, projectId) {
  return {
    type: ADD_FEATURE,
    payload: {
      featureId: `features${nextFeatureId++}`,
      title: text,
      projectId: projectId,
    },
  }
}

export function editFeature(featureId, text) {
  return {
    type: EDIT_FEATURE,
    payload: {
      featureId: featureId,
      title: text,
    },
  }
}

export function deleteFeature(featureId, projectId) {
  return {
    type: DELETE_FEATURE,
    payload: { featureId: featureId, projectId: projectId },
  }
}
