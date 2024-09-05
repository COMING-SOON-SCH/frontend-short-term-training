import React, { useEffect, useState } from "react";

const Input = ({ placeholder, text, handleChange }) => {
  return <input type="text" placeholder={placeholder} className="todo-input" value={text} onChange={handleChange} />;
};

export default Input;
