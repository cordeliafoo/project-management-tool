import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/index.js'

class AddTodo extends Component {
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
    this.props.dispatch(addTodo(this.state.text, this.props.featureId))
    this.props.onAdd(this.state.text)
  }

  render() {
    return (
      <form style={{ width: '100%' }} onSubmit={e => this.handleSubmit(e)}>
        <div className="input-group">
          <input
            ref={ref => (this.input = ref)}
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
            autoFocus={true}
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

export default connect()(AddTodo)
