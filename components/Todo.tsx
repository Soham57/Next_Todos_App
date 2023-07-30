const Todo = ({ todo }) => {
  console.log("in", todo.content);
  return <div>{todo.content}</div>;
};
export default Todo;
