import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";


const Form = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <form className="flex justify-center items-center mt-16 ">
        <div className="relative">
          <input
            type="text"
            className="w-80 pl-2 pr-14 h-12 mr-3 rounded focus:outline-none shadow-md"
            placeholder="Begin typing here..."
            onChange={handleChange}
          />
          <button
            className="absolute top-0 right-2 focus:outline-none transition-all hover:opacity-90"
            type="submit"
          >
            <BsPlusSquareFill className="text-5xl" />
          </button>
        </div>

        <div className="select-tag">
          <select
            name="todos"
            className="w-36 h-12 mr-3 rounded focus:outline-none shadow-md"
          >
            <option value="categories" disabled selected>
              Categories
            </option>
            <option value="alltodos">All Todos</option>
            <option value="done">Done</option>
            <option value="notdone">Not Done</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
