import Todos from "./components/Todos";
import Todo from "./models/todo";

const todos = [
  new Todo("JavaScript"),
  new Todo("Typescript"),
  new Todo("Solidity"),
  new Todo("CSS"),
  new Todo("Python"),
];

const App = () => {
  return <Todos items={todos} />;
};

export default App;
