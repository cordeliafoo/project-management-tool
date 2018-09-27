import React, { Component } from 'react'
import { connect } from 'react-redux'

import FeatureListItem from './FeatureListItem.js'

const mapStateToProps = state => {
  return {
    store: state,
  }
}

class FeaturesList extends Component {
  render() {
    const { project } = this.props

    let featuresObj = this.props.store.featureReducer.byFeatureId

    let projectFeatures =
      !!project &&
      this.props.store.projectReducer.byProjectId[project.id].features

    return (
      <div className="container" style={{ overflow: 'scroll' }}>
        <ul style={{ paddingInlineStart: 0, display: 'flex' }}>
          {!!projectFeatures &&
            projectFeatures.map((item, index) => (
              <div
                style={{ display: 'flex', flexDirection: 'row' }}
                key={`feature_${index}`}
              >
                <FeatureListItem
                  feature={featuresObj[item]}
                  title={!!featuresObj[item] && featuresObj[item].title}
                  featureId={item}
                  projectId={project.id}
                />
                <div className="mr-1 ml-1">&nbsp;</div>
              </div>
            ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FeaturesList)
