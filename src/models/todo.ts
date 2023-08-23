class Todo {
  id: number;
  text: string;

  constructor(_text: string) {
    this.text = _text;
    this.id = Math.random();
  }
}

export default Todo;
