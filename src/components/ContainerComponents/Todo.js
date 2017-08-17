import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

//references for components
import TodoAPI from '../API/TodoAPI'
import TodoList from '../PresentationalComponents/TodoList';
import TodoSearch from '../PresentationalComponents/TodoSearch';
import AddTodo from '../PresentationalComponents/AddTodo'

export default class Todo extends React.Component {
  constructor() {
    super();
    this.addNewTodo = this.addNewTodo.bind(this);
    this.todoSearch = this.todoSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      accountName: 'Kaushik',
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }
  componentDidMount() {
    TodoAPI.getTodos();
  }
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  todoSearch (searchText,isChecked) {
    console.log(searchText,isChecked);
    this.setState ({
      showCompleted: isChecked,
      searchText: searchText.toLowerCase()
    })
  }
  addNewTodo(newTodo) {
    this.setState ({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTodo,
          completedTime: null,
          isCompleted: false
        }
      ]

    })
  }
  handleToggle(id) {
    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    let updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id ) {
        todo.isCompleted = !todo.isCompleted;
        todo.completedTime = now;
      }
      return todo;
    })
    this.setState ({todos: updatedTodos})
  }
  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return(
      <div>
      <h3 className="page-title">Todo App</h3>
        <TodoSearch todoSearch = {this.todoSearch}/>
        <TodoList todos={filteredTodos} toggleCompleted = {this.handleToggle}/>
        <AddTodo addNewTodo={this.addNewTodo}/>
      </div>
    );
  }
}
Todo.contextTypes={
  router: React.PropTypes.object
}
