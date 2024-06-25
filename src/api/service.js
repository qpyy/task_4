const BASE_URL = "https://jsonplaceholder.typicode.com";

const USERS_URL = `${BASE_URL}/users`;

const fetchUsersService = async () => {
  const response = await fetch(USERS_URL);
  return await response.json();
};

const fetchUserByIdService = async (id) => {
  const response = await fetch(`${USERS_URL}/${id}`);
  return await response.json();
};

export { fetchUsersService, fetchUserByIdService };
