import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProjectListItem from './ProjectListItem.js'

const mapStateToProps = state => {
  return {
    store: state,
  }
}

class ProjectList extends Component {
  render() {
    let projects = this.props.store.projectReducer.byProjectId
    return (
      <div className="row">
        <ul className="col-9 mx-auto">
          {Object.keys(projects).map((objKey, index) => (
            <ProjectListItem key={index} project={projects[objKey]} />
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ProjectList)
