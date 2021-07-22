import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, todosFiltered }) => {
  return (
    <div className="pt-1 pb-8 mt-4 bg-white bg-opacity-25 rounded shadow-lg md:mx-44">
      <ul>
        {todosFiltered.map((todo) => (
          <Todo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
