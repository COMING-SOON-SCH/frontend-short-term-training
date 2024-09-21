// TodoItem.js
import React from "react";
import Button from "./Button";
import Checkbox from "./CheckBox";

const TodoItem = ({ todoText, index, onDelete }) => {
  return (
    <li className="todo-item">
      <Checkbox checked={false} onChange={() => {}} />
      <span className="todo-text">{todoText}</span>
      <button
        type="button"
        className="deleteBtn"           //className을 deleteBtn로 설정
        onClick={() => onDelete(index)} // 인덱스를 onDelete로 전달
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
