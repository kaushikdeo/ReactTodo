import React from 'react';
import moment from 'moment';

class Todos extends React.Component {
  render() {
    let {id,text,isCompleted,completedTime} = this.props;
    let renderDate = ()=>{
      let message = " Created : ";
      let timeStamp = completedTime;
      return message + moment.unix(timeStamp).format('Do MMM YYYY @ h:mm a');
    }
    if (isCompleted === false) {
      return (
        <div className="notcompleted" onClick={()=>{
            this.props.toggleCompleted(id)
          }}>
        <label><input checked={isCompleted} type = "checkbox" /></label> . <b>{text}</b>
        <p>Added On : {this.props.completedTime}</p>
        <p>Due Date : {this.props.dueDate}</p>
        <hr className="thin" />
        </div>
      );
    }
    else {
      return (
        <div className="completed" onClick={()=>{
            this.props.toggleCompleted(id)
          }}>
        <p><label><input checked={isCompleted} type = "checkbox" /> </label> .<b>{text}</b></p>
        <p>Completed On : {this.props.completedTime}</p>
        <hr className="thin" />
        </div>
      );
    }
  }
}

export default Todos;
