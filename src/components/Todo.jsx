import React from "react";
import Checkbox from "./CheckBox";
import Input from "./Input";
import Button from "./Button";
import "../assets/todo.css";

const Todo = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    console.log(text); // 얘를 실행하셈
  }, [text]);

  // 배열 변경 감지
  useEffect(() => {
    console.log(arrayList); // 얘를 실행하셈
  }, [arrayList]);
  return (
    <div className="todo-container">
      <h1>투두리스트</h1>
      <div className="todo-input-container">
        <Input text={text} handleChange={handleChange} placeholder={"입력하세요"} />

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
