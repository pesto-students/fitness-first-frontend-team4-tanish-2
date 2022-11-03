
  export function edittodo(todos,editingtext,settodos,settodoediting,seteditingtext, id) {

    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingtext;
      }
      return todo;
    });
    settodos(updatedtodos);
    settodoediting(null);
    seteditingtext("");
  }

