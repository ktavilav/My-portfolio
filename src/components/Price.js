import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState({
    todo: [],
    inProgress: [],
    completed: []
  });

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTodoList({ ...todoList, todo: [...todoList.todo, task] });
      setTask('');
    }
  };

  const handleDelete = (list, index) => {
    const newTasks = [...todoList[list]];
    newTasks.splice(index, 1);
    setTodoList({ ...todoList, [list]: newTasks });
  };

  const moveTask = (fromList, toList, index) => {
    const taskToMove = todoList[fromList][index];
    const newFromList = [...todoList[fromList]];
    const newToList = [...todoList[toList]];
    newFromList.splice(index, 1);
    setTodoList({ ...todoList, [fromList]: newFromList, [toList]: [...newToList, taskToMove] });
  };

  return (
    <section className="todo-list-container" id="todo">
      <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">Todo</span> list</h2>
        <div className="row">
          <h1>DoReMi project - Musical instrument rental store</h1>
          <div className="column">
            <h2>To do</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={task} onChange={handleChange} placeholder="New Task" />
              <button type="submit">Add</button>
            </form>
            <ul>
              {todoList.todo.map((task, index) => (
                <li key={index}>
                  {task}
                  <div>
                    <button onClick={() => handleDelete('todo', index)}>Delete</button>
                    <button onClick={() => moveTask('todo', 'inProgress', index)}>Move to InProgress</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2>In Progress</h2>
            <ul>
              {todoList.inProgress.map((task, index) => (
                <li key={index}>
                  {task}
                  <div>
                    <button onClick={() => handleDelete('inProgress', index)}>Delete</button>
                    <button onClick={() => moveTask('inProgress', 'completed', index)}>Move to done</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2>Done</h2>
            <ul>
              {todoList.completed.map((task, index) => (
                <li key={index}>
                  {task}
                  <div>
                    <button onClick={() => handleDelete('completed', index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
