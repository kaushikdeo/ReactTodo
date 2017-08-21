import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class AddTodo extends React.Component {
  constructor(){
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleDateChange =  this.handleDateChange.bind(this);
    this.state = {
      selectedDate: moment()
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    if(this.todoText.value.length > 0){
      this.props.addNewTodo(this.todoText.value, this.state.selectedDate)
      this.todoText.value = '';
    }
    else{
      alert('please input valid text before adding new todo');
      this.todoText.focus();
    }
  }
  handleDateChange (date) {
    this.setState({selectedDate : date});
  }
  render() {
    return(
      <div className="form-group searchcomp">
      <form onSubmit={this.onFormSubmit} ref={(input) => {this.addNewTodoForm = input}}>
        <input type="text" ref={(input) => {this.todoText=input}} className = "form-control" placeholder="What do you want to do today?"/>
        <br />
        <button type="submit" className="btn btn-success">Add Todo</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="datepicker">
              <DatePicker selected={this.state.selectedDate} onChange={this.handleDateChange} withPortal/>
        </div>
      </form>
      </div>
    );
  }
}
export default AddTodo;
