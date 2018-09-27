import React, { Component } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import ProjectsView from './views/ProjectsView.js'
import FeaturesView from './views/FeaturesView.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
          crossOrigin="anonymous"
        />
        <BrowserRouter>
          <div>
            <div style={{ padding: '2em', boxShadow: '1px 1px 10px gray' }}>
              <h1 className="App-title">Project Management Tool</h1>
            </div>
            <Route exact path="/" component={ProjectsView} />
            <Route exact path="/:projectId" component={FeaturesView} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
