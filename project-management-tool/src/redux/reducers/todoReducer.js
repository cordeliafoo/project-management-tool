import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_COMPLETE_FOR_TODO,
  EDIT_TODO,
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
