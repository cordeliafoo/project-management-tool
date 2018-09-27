import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteProject } from '../redux/actions/index.js'

import EditProject from '../containers/EditProject.js'

import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import ChevronRight from '@material-ui/icons/ChevronRight'

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
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex' }} className="mr-2">
                <Delete onClick={() => this.handleDeleteClick()} />
                <div>&nbsp;</div>
                {!isEditing && <Edit onClick={() => this.handleEditClick()} />}
                <div>&nbsp;</div>
              </div>
              {!isEditing && <p className="mb-0">{project.title}</p>}
              {!!isEditing && (
                <EditProject
                  projectId={project.id}
                  value={project.title}
                  onSave={text => this.handleEditSave(text)}
                />
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                to={`/${project.id}/`}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                }}
              >
                <ChevronRight style={{ fontSize: '3 0px' }} />
              </Link>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default connect()(ProjectListItem)
