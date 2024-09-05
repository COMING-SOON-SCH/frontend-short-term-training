import React from "react";
import Button from "./Button";
import Checkbox from "./CheckBox";

const TodoItem = ({todoText}) => { // 나
  return (
    <div>
      <li className="todo-item">
        <Checkbox checked={false} onChange={() => {}} />
        <span className="todo-text">
            {todoText}
        </span>
        <Button onClick={() => {}}>text</Button>
        <Button onClick={() => {}}>text</Button>
      </li>
    </div>
  );
};

export default TodoItem;
