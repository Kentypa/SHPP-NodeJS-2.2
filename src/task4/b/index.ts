import fetch from "node-fetch";
import { User } from "../types/user";

async function getRandomUser(): Promise<User> {
  const response = await fetch(
    "https://random-data-api.com/api/users/random_user",
  );

  if (!response.ok) {
    return getRandomUser();
  }

  return (await response.json()) as User;
}

async function getWoman(): Promise<User> {
  const user = await getRandomUser();
  if (user.gender === "Female") {
    return user;
  }
  return getWoman();
}

getWoman().then((user) => {
  console.log(user);
});
