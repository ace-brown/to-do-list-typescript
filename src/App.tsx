import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} />
    </>
  );
};

export default App;
