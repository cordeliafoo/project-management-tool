import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import FeaturesList from '../components/FeaturesList.js'
import AddFeature from '../containers/AddFeature.js'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const mapStateToProps = state => {
  return {
    store: state,
  }
}

class FeaturesView extends Component {
  renderBreadcrumb() {
    return (
      <Link to={`/`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeftIcon style={{ fontSize: '20px' }} />
          <p className="mb-0">All Projects</p>
        </div>
      </Link>
    )
  }
  render() {
    let projectIdInUrl = this.props.match.params.projectId
    let project = this.props.store.projectReducer.byProjectId[projectIdInUrl]

    return (
      <div className="container mt-5">
        {this.renderBreadcrumb()}
        <h2>{!!project && project.title}</h2>
        <div>&nbsp;</div>
        {!!project && <AddFeature projectId={project.id} />}
        {!project && <div>Sorry, project does not exist</div>}
        <div>&nbsp;</div>
        <FeaturesList project={project} />
      </div>
    )
  }
}

FeaturesView = withRouter(FeaturesView)
export default connect(mapStateToProps)(FeaturesView)
