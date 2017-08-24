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
      todoLists: {
        listName: 'Home',
        listID: 1,
      },
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
  todoSearch(searchText, isChecked) {
    this.setState({showCompleted: isChecked, searchText: searchText.toLowerCase()})
  }
  addNewTodo(newTodo, selectedDate) {
    console.log(selectedDate.format('MMMM Do YYYY, h:mm:ss a'));
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: newTodo,
          completedTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
          dueDate: selectedDate.format('MMMM Do YYYY, h:mm:ss a'),
          isCompleted: false
        }
      ]

    })
  }
  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        todo.completedTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      }
      return todo;
    })
    this.setState({todos: updatedTodos})
  }
  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div className="mainapp col-sm-9 col-xs-12 col-md-6 col-lg-6 col-centered">
        <h3 className="page-title text-center">Todo App</h3>
        <AddTodo addNewTodo={this.addNewTodo} />
        <TodoList todos={filteredTodos} toggleCompleted={this.handleToggle}/>
        <TodoSearch todoSearch={this.todoSearch}/>
        <p>Created by Kaushik Deo. Git Repository :
          <a href="https://github.com/kaushikdeo/ReactTodo">
            Go To GitHub
          </a>
        </p>
      </div>
    );
  }
}
Todo.contextTypes = {
  router: React.PropTypes.object
}
