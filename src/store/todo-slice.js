import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
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

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: DUMMY_LIST,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Math.random(),
        task: action.payload,
        complete: false,
      });
    },
    markComplete(state, action) {
      let selectedTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[selectedTodoIndex].complete =
        !state.todos[selectedTodoIndex].complete;
    },
    clearCompleted(state) {
      let filteredTodos = state.todos.filter((task) => task.complete !== true);
      state.todos = filteredTodos;
    },
    // searchTodos(state, action) {
    //   let searchString = action.payload;
    //   let filteredTodos = state.todos.filter((todo) =>
    //     todo.task.toLowerCase().includes(searchString.trim().toLowerCase())
    //   );
    // },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
