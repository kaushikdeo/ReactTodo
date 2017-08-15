import uuid from 'uuid';

module.exports = {
  setTodos :function(todos){
    if (Array.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
    else{
      console.log('cannot push todos to the localStorage');
    }
  },
  getTodos: function(){
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }
    if(Array.isArray(todos)) {
      return todos;
    }
    else {
      console.log('value to be returned is not an array');
      return [];
    }
   },
}
