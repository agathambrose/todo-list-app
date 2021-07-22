import React, { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import "./TodoForm.css";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 6, 3),
    overflow: "hidden",
    outline: "none",
  },
}));

const Form = ({ todos, setTodos, inputTodo, setInputTodo, setCategory }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(["All", "Done", "Not Done"]);

  const handleChange = (event) => {
    setInputTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (setTodos() === "") {
      setInputTodo("");
    } else {
      setTodos([...todos, { text: inputTodo, done: false, id: uuidv4() }]);
    }
    setInputTodo("");
  };

  const handleCategoryList = (event) => {
    setCategory(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <form className="flex items-center justify-center mt-16 ">
        <div className="relative">
          <input
            type="text"
            value={inputTodo}
            className="w-48 h-12 pl-2 mr-3 rounded shadow-md md:w-80 pr-14 focus:outline-none"
            placeholder="Type here..."
            onChange={handleChange}
          />
          <button
            className="absolute top-0 transition-all right-2 focus:outline-none hover:opacity-90"
            type="submit"
            onClick={handleSubmit}
          >
            <BsPlusSquareFill className="text-5xl" />
          </button>
        </div>

        <div className="relative overflow-hidden rounded shadow-md select-tag">
          <select
            name="todos"
            className="w-32 h-12 px-1 mr-3 bg-white rounded shadow-md cursor-pointer md:w-36 focus:outline-none"
            onChange={handleCategoryList}
          >
            <option value="categories" disabled selected>
              Categories
            </option>
            <option value="all">All Todos</option>
            <option value="done">Done</option>
            <option value="not-done">Not Done</option>
          </select>
        </div>
      </form>
      <div className="flex items-center justify-center my-3">
        <button
          className="px-3 py-2 text-xs bg-white rounded shadow-md hover:bg-gray-100 focus:outline-none"
          onClick={handleOpen}
        >
          Add new categories
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="flex flex-col items-center justify-center focus:outline-none"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`px-2.5 pt-5 pb-4 md:px-8 ${classes.paper}`}>
            <form className="flex flex-col items-center justify-center">
              <input
                type="text"
                className="w-4/5 p-2 mb-2 text-center bg-gray-200 border border-gray-200 rounded md:w-full"
                placeholder="Enter category name"
              />
              <button
                className="w-4/5 p-2 my-2 text-white bg-blue-500 rounded md:w-full hover:bg-blue-600"
                onClick={handleClose}
              >
                Add to categories
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Form;
