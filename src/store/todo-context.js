import React, { useReducer } from "react";

const DUMMY_LIST = [
  {
    id: 1,
    task: "Give dog a bath",
    complete: true,
  },
  {
    id: 2,
    task: "Do laundry",
    complete: true,
  },
  {
    id: 3,
    task: "Vacuum floor",
    complete: false,
  },
  {
    id: 4,
    task: "Feed cat",
    complete: true,
  },
];

const TodoContext = React.createContext({
  todos: [],
  addTodo: (item) => {},
  markComplete: (id) => {},
  clearCompleted: () => {},
});

const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const newTodoTask = action.payload;

    const newTodo = { id: Math.random(), task: newTodoTask, complete: false };
    const allTodos = state;
    return [newTodo, ...allTodos];
  }
  if (action.type === "MARK_COMPLETE") {
    const id = action.payload;

    let selectedTodo = state.find((todo) => todo.id === id);
    selectedTodo.complete = !selectedTodo.complete;
    let selectedTodoIndex = state.findIndex((todo) => todo.id === id);
    let copyTodos = [...state];
    copyTodos[selectedTodoIndex] = selectedTodo;
    return copyTodos;
  }
  if (action.type === "CLEAR_COMPLETED") {
    let filteredTodos = state.filter((task) => task.complete !== true);
    return filteredTodos;
  }
  return [];
};

export const TodoContextProvider = (props) => {
  //   const [todos, setTodos] = useState(DUMMY_LIST);

  const [todos, dispatchTodo] = useReducer(todoReducer, DUMMY_LIST);

  const addTodo = (item) => {
    dispatchTodo({ type: "ADD_TODO", payload: item });
    // setTodos((prevTodos) => {
    //   return [...prevTodos, { id: Math.random(), task: item, complete: false }];
    // });
  };

  const markComplete = (id) => {
    dispatchTodo({ type: "MARK_COMPLETE", payload: id });
    // let selectedTodo = todos.find((todo) => todo.id === id);
    // selectedTodo.complete = !selectedTodo.complete;
    // let selectedTodoIndex = todos.findIndex((todo) => todo.id === id);
    // let copyTodos = [...todos];
    // copyTodos[selectedTodoIndex] = selectedTodo;
    // setTodos(copyTodos);
  };

  const clearCompleted = () => {
    dispatchTodo({ type: "CLEAR_COMPLETED" });
    // let filteredTodos = todos.filter((task) => task.complete !== true);
    // setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        markComplete,
        clearCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
