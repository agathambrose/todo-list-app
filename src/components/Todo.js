import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [iconToggle, setIconToggle] = useState(false);

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
    handleToggle();
  };

  const handleToggle = () => {
    setIconToggle(!iconToggle);
  };

  return (
    <div className="flex items-center justify-center mx-2 mt-6">
      <li
        className={`min-w-64 min-h-20 py-2 pl-2 bg-white rounded md:w-96 ${
          todo.done ? "opacity-25" : ""
        }`}
      >
        {text}
      </li>
      <button
        className={`px-3 py-2 mx-4 ${
          iconToggle ? "bg-white bg-opacity-25" : "bg-white"
        } rounded`}
        onClick={handleTaskDone}
      >
        {iconToggle ? (
          <FaThumbsDown className="text-gray-800 " />
        ) : (
          <FaThumbsUp />
        )}
      </button>
      <button className="px-3 py-2 bg-white rounded" onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
