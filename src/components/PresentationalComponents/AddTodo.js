import React from 'react';

class AddTodo extends React.Component {
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
  onFormReset(e) {
    e.preventDefault();
    this.addNewTodoForm.reset();
  }
  render() {
    return(
      <div>
      <form ref={(input) => {this.addNewTodoForm = input}}>
        <input type="text" ref={(input) => {this.todoText=input}} className = "form-control"placeholder="What do you want to do today?"/>
        <br />
        <button onClick={this.onFormSubmit.bind(this)}>Add Todo</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.onFormReset.bind(this)}>Reset</button>
      </form>
      </div>
    );
  }
}
export default AddTodo;
