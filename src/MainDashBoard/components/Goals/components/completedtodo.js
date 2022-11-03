export function completedtodo(settodos,todos,id) {
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    // { console.log(todo)}
      return todo;
    
    });
    settodos(updatedtodos);
    console.log(todos);
  }
