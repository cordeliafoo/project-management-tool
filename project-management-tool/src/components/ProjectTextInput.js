import React, { Component } from 'react'

class ProjectTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || '',
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
    }
    if (this.props.newProject) {
      this.setState({ text: '' })
    }
  }

  render() {
    return (
      <input
        type="text"
        autofocus="true"
        value={this.state.text}
        onChange={e => this.handleChange(e)}
        onKeyDown={() => this.handleSubmit()}
      />
    )
  }
}

export default ProjectTextInput
