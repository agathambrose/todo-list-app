import React, { useState, useEffect } from "react";
import TodoForm from "./components/todo-form/TodoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("all");
  const [todosFiltered, setTodosFiltered] = useState([]);

  useEffect(() => {
    const getStoredTodosInLocalStorage = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let storedTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(storedTodos);
      }
    };
    getStoredTodosInLocalStorage();
  }, []);

  useEffect(() => {
    const handleFilteredTodos = () => {
      if (category === "done") {
        setTodosFiltered(todos.filter((item) => item.done === true));
      } else if (category === "not-done") {
        setTodosFiltered(todos.filter((item) => item.done === false));
      } else {
        setTodosFiltered(todos);
      }
    };
    handleFilteredTodos();

    const storeTodosInLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    storeTodosInLocalStorage();
  }, [todos, category]);

  return (
    <div>
      <Header />
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        setCategory={setCategory}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        todosFiltered={todosFiltered}
      />
    </div>
  );
};
export default App;
