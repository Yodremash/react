import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { updateFromServer, onCreateTask, setDone, onDelete } from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount = () => this.onUpdate();

  onUpdate = () => updateFromServer().then(data => this.setState({ tasks: data }));

  onCreate = valueText => onCreateTask(valueText).then(() => this.onUpdate());

  onDoneToggle = id =>
    setDone(id, {
      done: !this.state.tasks.find(task => task.id === id).done,
    }).then(() => this.onUpdate());

  onDelete = id => onDelete(id).then(() => this.onUpdate());

  render = () => {
    const sortedTasks = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreateTask={this.onCreate} />
        <ul className="list">
          {sortedTasks.map(task => (
            <Task key={task.id} {...task} setDone={this.onDoneToggle} onDelete={this.onDelete} />
          ))}
        </ul>
      </main>
    );
  };
}

export default TasksList;
