import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteFeature } from '../redux/actions/index.js'

import EditFeature from '../containers/EditFeature.js'
import AddTodo from '../containers/AddTodo.js'
import TodoItem from './TodoItem.js'

import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'

const mapStateToProps = state => {
  return {
    store: state,
  }
}

class FeatureListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      showTodoTextInput: false,
    }
  }

  handleEditSave(text) {
    this.setState({
      isEditing: false,
    })
  }

  handleEditClick() {
    this.setState({
      isEditing: true,
    })
  }

  handleDeleteClick() {
    this.props.dispatch(
      deleteFeature(this.props.feature.id, this.props.projectId)
    )
  }

  handleAddTodoClick() {
    this.setState({
      showTodoTextInput: true,
    })
  }

  handleOnAddTodo(text) {
    this.setState({ showTodoTextInput: false })
  }

  render() {
    const { title, featureId, feature, store } = this.props
    const { isEditing, showTodoTextInput } = this.state

    let todosForFeature = []
    if (store.featureReducer.byFeatureId[featureId].todos) {
      todosForFeature = store.featureReducer.byFeatureId[featureId].todos
    }

    return (
      <div
        style={{
          backgroundColor: '#ececec',
          padding: '1em',
          width: '300px',
          minHeight: '400px',
          height: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ maxWidth: '200px', textAlign: 'le ft' }}>
            {!isEditing && !!feature && feature.title}
          </p>
          {!!isEditing && (
            <EditFeature
              value={title}
              featureId={featureId}
              onSave={text => this.handleEditSave(text)}
            />
          )}
          <div>
            <Edit onClick={() => this.handleEditClick()} />
            <Delete onClick={() => this.handleDeleteClick()} />
          </div>
        </div>
        <hr />
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ width: '100%' }}
          onClick={() => this.handleAddTodoClick()}
        >
          Add Todo
        </button>
        <hr />
        {todosForFeature.map((item, index) => (
          <TodoItem
            key={`todo_${index}`}
            todo={store.todoReducer.byTodoId[item]}
            featureId={featureId}
          />
        ))}
        {!!showTodoTextInput && (
          <AddTodo
            featureId={featureId}
            onAdd={text => this.handleOnAddTodo(text)}
          />
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(FeatureListItem)
