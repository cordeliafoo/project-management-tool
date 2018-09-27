import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProject } from '../redux/actions/index.js'

class EditProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.value || '',
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(editProject(this.props.projectId, this.state.text))
    this.props.onSave(this.state.text)
  }

  render() {
    const { projectId, value } = this.props
    return (
      <form style={{ width: '100%' }} onSubmit={e => this.handleSubmit(e)}>
        <div className="input-group" style={{ width: '50%' }}>
          <input
            ref={ref => (this.input = ref)}
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" id="basic-addon2" type="submit">
              save
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect()(EditProject)
