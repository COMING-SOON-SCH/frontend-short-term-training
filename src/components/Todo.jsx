import React from "react";
import Checkbox from "./CheckBox";
import Input from "./Input";
import Button from "./Button";
import "../assets/todo.css";

const Todo = () => {
  return (
    <div className="todo-container">
      <h1>투두리스트</h1>
      <div className="todo-input-container">
        <Input value="" onChange={() => {}} placeholder="할 일을 입력하세요" />
        <Button onClick={() => {}}></Button>
      </div>
      <ul className="todo-list">
        <li className="todo-item">
          <Checkbox checked={false} onChange={() => {}} />
          <span className="todo-text">할 일</span>
          <Button onClick={() => {}}></Button>
          <Button onClick={() => {}}></Button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
