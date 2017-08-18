import React from 'react';

import moment from 'moment';

class AddTodo extends React.Component {
  constructor(){
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    if(this.todoText.value.length > 0){
      this.props.addNewTodo(this.todoText.value)
      this.todoText.value = '';
    }
    else{
      alert('please input valid text before adding new todo');
      this.refs.todoText.focus();
    }
  }
  render() {
    return(
      <div className="form-group">
      <form onSubmit={this.onFormSubmit} ref={(input) => {this.addNewTodoForm = input}}>
        <input type="text" ref={(input) => {this.todoText=input}} className = "form-control" placeholder="What do you want to do today?"/>
        <br />
        <button type="button" className="btn btn-success">Add Todo</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </form>
      </div>
    );
  }
}
export default AddTodo;
