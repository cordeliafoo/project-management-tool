export const ADD_PROJECT = 'ADD_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

export const ADD_FEATURE = 'ADD_FEATURE'
export const EDIT_FEATURE = 'EDIT_FEATURE'
export const DELETE_FEATURE = 'DELETE_FEATURE'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETE_FOR_TODO = 'TOGGLE_COMPLETE_FOR_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

let nextProjectId = 3
let nextFeatureId = 3
let nextTodoId = 3

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

export function addTodo(text, featureId) {
  return {
    type: ADD_TODO,
    payload: {
      todoId: `todo${nextTodoId++}`,
      featureId: featureId,
      title: text,
    },
  }
}

export function toggleCompleteForTodo(todoId) {
  return {
    type: TOGGLE_COMPLETE_FOR_TODO,
    payload: {
      todoId: todoId,
    },
  }
}

export function editTodo(todoId, text) {
  return {
    type: EDIT_TODO,
    payload: {
      todoId: todoId,
      title: text,
    },
  }
}
export function deleteTodo(todoId, featureId) {
  return {
    type: DELETE_TODO,
    payload: {
      todoId: todoId,
      featureId: featureId,
    },
  }
}
