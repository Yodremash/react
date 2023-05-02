import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const baseUrl = 'https://64510ed8a3221969115987a0.mockapi.io/';
class TasksList extends Component {
  state = {
    tasks: [],
  };
  onCreate = text => {
    // 1. Create task obj
    // 2. post object to server
    // 3. fetch list from server
    const { tasks } = this.state;
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;utc-9',
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        fetch(baseUrl)
          .then(res => {
            if (res.ok) {
              return response.json();
            }
          })
          .then(tasksList => {
            this.setState({
              tasks: tasksList,
            });
          });
      }
      throw new Error('Failed to create task');
    });

    const updatedTasks = tasks.concat(newTask);
    this.setState({ tasks: updatedTasks });
  };
  handleTaskStatusChange = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  };

  handleTaskDelete = id => {
    const updatedTasks = this.state.tasks.filter(task => task.id != id);
    this.setState({ tasks: updatedTasks });
  };
  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
