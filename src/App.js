import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { todoActions } from "./store/todo-slice";
// import TodoContext from "./store/todo-context";

function App() {
  const todos = useSelector((state) => state.todo.todos);

  const [searchText, setSearchText] = useState("");

  const filteredTodos = todos.filter((todo) => {
    return todo.task.toLowerCase().includes(searchText.trim().toLowerCase());
  });

  const dispatch = useDispatch();

  const handleAddTodo = (data) => {
    setSearchText("");

    dispatch(todoActions.addTodo(data));

    // setTodos((prevTodos) => {
    //   return [...prevTodos, { id: Math.random(), task: data, complete: false }];
    // });
  };

  const handleMarkComplete = (id) => {
    dispatch(todoActions.markComplete(id));
    // setFilteredTodos(todos);
    // let selectedTodo = todos.find((todo) => todo.id === id);
    // selectedTodo.complete = !selectedTodo.complete;
    // let selectedTodoIndex = todos.findIndex((todo) => todo.id === id);
    // let copyTodos = [...todos];
    // copyTodos[selectedTodoIndex] = selectedTodo;
    // setTodos(copyTodos);
  };

  const handleClearCompleted = () => {
    // let filteredTodos = todos.filter((task) => task.complete !== true);
    // setTodos(filteredTodos);
    dispatch(todoActions.clearCompleted());
  };

  const handleSearch = (data) => {
    setSearchText(data);
    // dispatch(todoActions.searchTodos(task));
  };

  return (
    <div className="App">
      <Header />
      <TodoForm onAddTodo={handleAddTodo} onSearch={handleSearch} />
      <TodoList
        todos={filteredTodos}
        onMarkComplete={handleMarkComplete}
        onClearCompletedClick={handleClearCompleted}
      />
    </div>
  );
}

export default App;
