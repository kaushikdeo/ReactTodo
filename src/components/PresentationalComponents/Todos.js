import React from 'react';

class Todos extends React.Component {
  render() {
    let {id,text,isCompleted,completedTime} = this.props;
    if (completedTime === null) {
      return (
        <div onClick={()=>{
            this.props.toggleCompleted(id)
          }}>
        <p><label><input checked={isCompleted} type = "checkbox" /> </label> . <b>{text}</b></p>
        </div>
      );
    }
    else {
      return (
        <div onClick={()=>{
            this.props.toggleCompleted(id)
          }}>
        <p><label><input checked={isCompleted} type = "checkbox" /> </label> . <strike><b>{text}</b></strike> </p>
        </div>
      );
    }
  }
}

export default Todos;
