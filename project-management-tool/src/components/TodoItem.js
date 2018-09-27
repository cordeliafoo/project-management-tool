import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleCompleteForTodo, deleteTodo } from '../redux/actions/index.js'

import EditTodo from '../containers/EditTodo.js'

import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'

const mapStateToProps = state => {
  return {
    store: state,
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
  }

  handleEditSave(text) {
    this.setState({
      isEditing: false,
    })
  }

  handleOnCircleClick() {
    this.props.dispatch(toggleCompleteForTodo(this.props.todo.id))
  }

  handleDeleteClick() {
    this.props.dispatch(deleteTodo(this.props.todo.id, this.props.featureId))
  }

  handleEditClick() {
    this.setState({
      isEditing: true,
    })
  }

  render() {
    const { todo } = this.props
    const { isEditing } = this.state
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="mb-1"
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: 'gray',
              cursor: 'pointer',
              marginRight: '10px',
            }}
            onClick={() => this.handleOnCircleClick()}
          />
          <div>&nbsp;</div>
          <li
            style={
              !!todo && todo.completed
                ? {
                    listStyle: 'none',
                    textAlign: 'left',
                    textDecoration: 'line-through',
                  }
                : { listStyle: 'none', textAlign: 'left' }
            }
          >
            {!isEditing && !!todo && todo.title}
            {!!isEditing && (
              <EditTodo
                todoId={todo.id}
                value={!!todo && todo.title}
                onSave={text => this.handleEditSave(text)}
              />
            )}
          </li>
        </div>
        <div style={{ display: 'flex' }}>
          <Edit
            style={{ fontSize: '18px' }}
            onClick={() => this.handleEditClick()}
          />
          <div>&nbsp;</div>
          <Delete
            style={{ fontSize: '18px' }}
            onClick={() => this.handleDeleteClick()}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TodoItem)
