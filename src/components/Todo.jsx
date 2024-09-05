import React, { useEffect, useState } from "react";
import Checkbox from "./CheckBox";
import Input from "./Input";
import Button from "./Button";
import "../assets/todo.css";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [arrayList, setArrayList] = useState([]);

  let RenderTestArr = arrayList.map((el) => {
    return (
      <>
        <TodoItem todoText={el}> </TodoItem>
      </>
    );
  });

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // 페이지가 처음 시작될떄
  useEffect(() => {
    console.log(text); // 얘를 실행하셈
  }, [text]);

  // 배열 변경 감지
  useEffect(() => {
    console.log(arrayList); // 얘를 실행하셈
  }, [arrayList]);

  // 입력 버튼 클릭 시 실행될 함수
  // 불변성의 원칙
  const handleClick = () => {
    console.log("버튼 누름");
    setArrayList([...arrayList, text]);
  };

  return (
    <div className="todo-container">
      <h1>투두리스트</h1>
      <div className="todo-input-container">
        <Input text={text} handleChange={handleChange} placeholder={"입력하세요"} />

        <Button testFunc={handleClick}>입력</Button>
      </div>
      <ul className="todo-list">
        <TodoItem todoText={text}> </TodoItem>
        {RenderTestArr}
      </ul>
    </div>
  );
};

export default Todo;
