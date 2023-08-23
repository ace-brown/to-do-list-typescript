import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type todosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

interface TodosContextProviderProps {
  children: ReactNode;
}

export const TodosContext = React.createContext<todosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: todosContextObj = {
    items: todos,
    addTodo: todoAddHandler,
    deleteTodo: todoDeleteHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
