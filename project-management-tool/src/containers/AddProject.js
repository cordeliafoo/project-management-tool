import React from 'react'
import { connect } from 'react-redux'
import { addProject } from '../redux/actions/index.js'

const AddProject = ({ dispatch }) => {
  let input
  return (
    <form
      style={{ width: '100%' }}
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addProject(input.value))
        input.value = ''
      }}
    >
      <div className="input-group mb-3 col-9 mx-auto">
        <input
          ref={node => (input = node)}
          type="text"
          className="form-control"
          placeholder="What's your next project?"
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

export default connect()(AddProject)
