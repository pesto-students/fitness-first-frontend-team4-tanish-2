export function deletetodo(settodos, todos, id) {
  const updatedtodos = [...todos].filter((todo) => todo.id !== id);
  return settodos(updatedtodos);
}
