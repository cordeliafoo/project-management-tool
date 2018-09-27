import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteProject } from '../redux/actions/index.js'

import EditProject from '../containers/EditProject.js'

class ProjectListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
  }

  handleEditClick() {
    this.setState({
      isEditing: true,
    })
  }

  handleEditSave(text) {
    this.setState({
      isEditing: false,
    })
  }

  handleDeleteClick() {
    this.props.dispatch(deleteProject(this.props.project.id))
  }

  render() {
    const { project } = this.props
    const { isEditing } = this.state

    return (
      <div>
        <li
          style={{
            listStyle: 'none',
            textAlign: 'left',
            padding: '1em',
            borderBottom: '1px solid gray',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            {!isEditing && <p className="mb-0">{project.title}</p>}
            {!!isEditing && (
              <EditProject
                projectId={project.id}
                value={project.title}
                onSave={text => this.handleEditSave(text)}
              />
            )}
            <div style={{ display: 'flex' }}>
              {!isEditing && (
                <button
                  type="button"
                  className="btn btn-primary mr-1"
                  onClick={() => this.handleEditClick()}
                >
                  edit project title
                </button>
              )}
              <Link to={`/${project.id}/`}>
                <button type="button" className="btn btn-primary mr-1">
                  view features
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-danger mr-1"
                onClick={() => this.handleDeleteClick()}
              >
                delete project
              </button>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default connect()(ProjectListItem)
