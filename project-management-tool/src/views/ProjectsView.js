import React, { Component } from 'react'

import AddProject from '../containers/AddProject.js'
import ProjectList from '../components/ProjectList.js'

class ProjectsView extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div>&nbsp;</div>
        <AddProject />
        <ProjectList />
      </div>
    )
  }
}

export default ProjectsView
