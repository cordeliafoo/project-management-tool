import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFeature } from '../redux/actions/index.js'

class AddFeature extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(addFeature(this.state.text, this.props.projectId))
  }

  render() {
    return (
      <form style={{ width: '100%' }} onSubmit={e => this.handleSubmit(e)}>
        <div className="input-group mb-3 col-9 mx-auto">
          <input
            ref={ref => (this.input = ref)}
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
            placeholder={'Add your next feature'}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" id="basic-addon2" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect()(AddFeature)
