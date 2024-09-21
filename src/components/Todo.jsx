// Todo.js
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "../assets/todo.css";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [arrayList, setArrayList] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") {
      alert("내용을 입력하세요!");
      return;
    }
    setArrayList([...arrayList, text]); // 새로운 todo 추가
    setText("");
  };

  // 할 일 삭제 함수
  const onDelete = (index) => {
    setArrayList(arrayList.filter((_, i) => i !== index)); // 인덱스로 삭제
  };

  const renderTodoItems = arrayList.map((el, index) => (
    <TodoItem
      key={index}
      todoText={el}
      index={index} // 인덱스를 전달
      onDelete={onDelete} // 삭제 함수 전달
    />
  ));

  return (
    <div className="todo-container">
      <h1>투두리스트</h1>
      <div className="todo-input-container">
        <Input text={text} handleChange={handleChange} placeholder={"입력하세요"} />
        <Button testFunc={handleClick}>입력</Button>
      </div>
      <ul className="todo-list">{renderTodoItems}</ul>
    </div>
  );
};

export default Todo;
