import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const handleDelete = (id) => {
    props.onMarkComplete(id);
  };
  const todoList = props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      task={todo.task}
      complete={todo.complete}
      onMarkComplete={handleDelete}
      id={todo.id}
    />
  ));

  const handleClick = () => {
    props.onClearCompletedClick();
  };

  return (
    <>
      {todoList}
      <button onClick={handleClick}>Clear completed</button>
    </>
  );
};

export default TodoList;
