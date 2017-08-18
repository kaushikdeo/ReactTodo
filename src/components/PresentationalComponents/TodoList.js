import React from 'react';

//reference to components
import Todos from './Todos';
class TodoList extends React.Component {
  render() {
    let {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo)=> {
        return(
            <Todos key={todo.id} {...todo} toggleCompleted = {this.props.toggleCompleted} />
        )
      })
    }
    return(
      <div>
        <h2 className="text-center"> Your Todo List </h2>
        <hr />
        {renderTodos()}
        <hr />
      </div>
    );
  }
}

export default TodoList;
