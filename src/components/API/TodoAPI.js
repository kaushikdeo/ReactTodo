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
   filterTodos: function(todos, showCompleted,  searchText) {
     let filteredTodos = todos;
     //filter by showCompleted
     filteredTodos = filteredTodos.filter((todo)=>!todo.isCompleted || showCompleted);
     //filter by searchText
     filteredTodos = filteredTodos.filter((todo)=>{
       let text = todo.text.toLowerCase()
       return searchText.length === 0 || text.indexOf(searchText) > -1;
     });

     //sort todos with noncompleted first
     filteredTodos.sort((a,b)=>{
       if (a.isCompleted === false && b.isCompleted === true) {
         return -1;
       }
       else if (a.isCompleted === true && b.isCompleted === false){
         return 1;
       }
       else {
         return 0;
       }
     });
     return filteredTodos;
   }
}
