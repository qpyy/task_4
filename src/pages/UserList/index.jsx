import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsersService } from "../../api/service";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetchUsersService();
      setUsers(response);
    } catch (error) {
      setError("Ошибка получения списка пользователей.");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <header>
        <h1>Список пользователей</h1>
      </header>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
