import { Component } from 'react';
import React from 'react';
class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = e => this.setState({ value: e.target.value });

  render = () => (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={this.state.value}
        onChange={this.handleChange}
      />
      <button
        className="btn create-task__btn"
        onClick={() => {
          this.props.onCreateTask(this.state.value);
          this.setState({ value: '' });
        }}
      >
        Create
      </button>
    </div>
  );
}
export default CreateTaskInput;

// 1. take text from input
// 2. create task with this text
// 3. add created task to the list
