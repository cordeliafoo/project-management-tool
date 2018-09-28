import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_COMPLETE_FOR_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../actions/index.js'

import initialState from './initialState.js'

function addTodoEntry(state, action) {
  const { payload } = action
  const { todoId, title } = payload

  // Create new Project object
  const todo = { id: todoId, title: title }

  // Insert new Project object
  return {
    ...state,
    [todoId]: todo,
  }
}

function toggleCompleteForTodo(state, action) {
  const { payload } = action
  const { todoId } = payload

  // Find selected Todo object
  const todo = state[todoId]
  todo.completed = !todo.completed

  return {
    ...state,
    [todoId]: todo,
  }
}

function editTodoEntry(state, action) {
  const { payload } = action
  const { todoId, title } = payload

  // Find selected Todo object
  const todo = state[todoId]
  todo.title = title

  return {
    ...state,
    [todoId]: todo,
  }
}

function deleteTodoEntry(state, action) {
  const { payload } = action
  const { todoId } = payload

  let newState = Object.keys(state)
    .filter(key => key !== todoId)
    .reduce((result, current) => {
      result[current] = state[current]
      return result
    }, {})
  return {
    ...newState,
  }
}

function byTodoId(state = initialState.todos.byId, action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodoEntry(state, action)
    case TOGGLE_COMPLETE_FOR_TODO:
      return toggleCompleteForTodo(state, action)
    case EDIT_TODO:
      return editTodoEntry(state, action)
    case DELETE_TODO:
      return deleteTodoEntry(state, action)
    default:
      return state
  }
}

function addTodoId(state, action) {
  const { payload } = action
  const { todoId } = payload

  // Append new Todo Id to the list of Todo Ids
  return state.concat(todoId)
}

function allTodoIds(state = initialState.todos.allIds, action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodoId(state, action)
    default:
      return state
  }
}

const todoReducer = combineReducers({
  byTodoId: byTodoId,
  allTodoIds: allTodoIds,
})

export default todoReducer
