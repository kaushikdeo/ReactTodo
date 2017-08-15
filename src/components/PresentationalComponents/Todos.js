import React from 'react';

class Todos extends React.Component {
  render() {
    let {id,text,isCompleted} = this.props;
    return (
      <div onClick={()=>{
          this.props.toggleCompleted(id)
        }}>
      <p><label><input checked={isCompleted} type = "checkbox" /> </label> . {text} </p>
      </div>
    );
  }
}

export default Todos;
