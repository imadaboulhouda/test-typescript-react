import React, { useEffect, useState } from "react";
import "./list.css";
interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
const List: React.FC = () => {
  const [user, setUser] = useState<Todo[] | []>([]);
  const fetchData = async () => {
    try {
      const x = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await x.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [user]);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log(e.target);
  };
  return (
    <div>
      {user.map(function (u: Todo) {
        return (
          <a href="#/" className="pp" onClick={handleClick} key={u.id}>
            {u.title}
          </a>
        );
      })}
    </div>
  );
};

export default List;
