import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
		super();
		this.state = {
			todos: []
		}

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.clearCompleteTodos = this.clearCompleteTodos.bind(this);
	}

  addTodo(todo) {
    let todos = this.state.todos;
    todos.push({
      value: todo,
      complete: false
    });
    this.setState({ todos });
  }

  removeTodo(todo) {
    let todos = this.state.todos.slice();
    todos.splice(todo, 1);
    this.setState({ todos });
  }

  completeTodo(todo) {
    let todos = this.state.todos.slice();
    todos[todo].complete = true;
    this.setState({ todos });
  }

  clearCompleteTodos() {
    console.log(this.state);
    let todos = this.state.todos.slice();
    this.setState({ todos: todos.filter( (todo) => !todo.complete ) });
  }

  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} removeTodo={this.removeTodo} completeTodo={this.completeTodo} />
        <TodoForm addTodo={this.addTodo} clearCompleteTodos={this.clearCompleteTodos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
