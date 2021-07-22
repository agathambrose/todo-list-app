import React from "react";

const Header = () => {
  return (
    <div className="flex font-otoman justify-center md:justify-start text-4xl bg-white pl-4 font-bold py-4 text-black">
      <div className="flex justify-center items-end">
        <h1>Todo List</h1>
        <p className="text-sm ml-1 font-nunito animate-pulse">by Agatha Ambrose</p>
      </div>
    </div>
  );
};

export default Header;
