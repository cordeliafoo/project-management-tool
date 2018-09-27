import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditFeature from '../containers/EditFeature.js'
import { deleteFeature } from '../redux/actions/index.js'

import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'

class FeatureListItem extends Component {
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

  render() {
    const { title, featureId, feature } = this.props
    const { isEditing } = this.state
    return (
      <div
        style={{
          backgroundColor: '#ececec',
          padding: '1em',
          width: '300px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {!isEditing && !!feature && feature.title}
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
        >
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect()(FeatureListItem)
