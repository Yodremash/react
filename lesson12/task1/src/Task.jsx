import React, { Component } from 'react';
import classNames from 'classnames';

class Task extends Component {
  render = () => (
    <li className={`list-item ${this.props.done ? `list-item_done` : ''}`}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={this.props.done}
        onChange={() => this.props.setDone(this.props.id)}
      />
      {this.props.text}
      <button
        className="list-item__delete-btn"
        onClick={() => this.props.onDelete(this.props.id)}
      />
    </li>
  );
}

export default Task;
