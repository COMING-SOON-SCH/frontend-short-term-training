import React from "react";

const Button = ({children, testFunc}) => { // children = "여기"
  return <button className="todo-button" onClick={testFunc}>{children}</button>;
};

export default Button;
