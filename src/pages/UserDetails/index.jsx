import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserByIdService } from "../../api/service";
import GoBackButton from "../../components/GoBackButton";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserById();
  }, [id]);

  const getUserById = async () => {
    try {
      const response = await fetchUserByIdService(id);
      setUser(response);
    } catch (error) {
      setError(`Ошибка получения пользователя ${id}`);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <article>
      <GoBackButton buttonText="Назад" />
      <header>
        <h1>{user.name}</h1>
      </header>
      <section>
        <h2>Информация о пользователе</h2>
        <p>
          <strong>Пользователь:</strong> {user.username}
        </p>
        <p>
          <strong>E-mail:</strong> {user.email}
        </p>
        <p>
          <strong>Телефон:</strong> {user.phone}
        </p>
        <p>
          <strong>Сайт:</strong>{" "}
          <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </p>
      </section>
      <section>
        <h2>Компания</h2>
        <p>
          <strong>Название компании:</strong> {user.company.name}
        </p>
        <p>
          <strong>Слоган:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>Бизнес:</strong> {user.company.bs}
        </p>
      </section>
      <section>
        <h2>Адрес</h2>
        <p>
          <strong>Улица:</strong> {user.address.street}
        </p>
        <p>
          <strong>Город:</strong> {user.address.city}
        </p>
        <p>
          <strong>Почтовый индекс:</strong> {user.address.zipcode}
        </p>
      </section>
    </article>
  );
};

export default UserDetails;
