import React from "react";
import { FaThumbsUp, FaTrash } from "react-icons/fa";

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleTaskDone = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex items-center justify-center mx-2 mt-6">
      <li className={`w-64 h-10 pt-2 pl-2 bg-white rounded md:w-96 ${todo.done ? "opacity-25" : ""}`}>{text}</li>
      <button className="px-3 py-2 mx-4 bg-white rounded" onClick={handleTaskDone}>
        <FaThumbsUp />
      </button>
      <button className="px-3 py-2 bg-white rounded" onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
