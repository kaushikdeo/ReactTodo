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
    if (completedTime === null) {
      return (
        <div onClick={()=>{
            this.props.toggleCompleted(id)
          }}>
        <label><input checked={isCompleted} type = "checkbox" /></label> . <b>{text}</b>
        </div>
      );
    }
    else {
      return (
        <div onClick={()=>{
            this.props.toggleCompleted(id)
          }}>
        <p><label><input checked={isCompleted} type = "checkbox" /> </label> .<b>{text}</b></p>
        </div>
      );
    }
  }
}

export default Todos;
