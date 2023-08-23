class Todo {
  id: string;
  text: string;

  constructor(_text: string) {
    this.text = _text;
    this.id = new Date().toISOString();
  }
}

export default Todo;
