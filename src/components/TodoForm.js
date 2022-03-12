import { useState } from "react";

import classes from "./TodoForm.module.css";

function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event) => {
    setTodo(event.target.value);

    props.onSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddTodo(todo);
    setTodo("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor="todo">
        To do
      </label>
      <input
        className={classes.input}
        type="text"
        id="todo"
        value={todo}
        placeholder="Enter todo item"
        onChange={handleTodoChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
