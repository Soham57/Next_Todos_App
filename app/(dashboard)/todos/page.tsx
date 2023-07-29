import db from "@/utils/db";

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = () => {
  return <div>Dashboard TodosPage </div>;
};

export default TodosPage;
