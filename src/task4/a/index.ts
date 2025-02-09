import fetch from "node-fetch";
import { User } from "../types/user";

function getRandomUser(): Promise<User> {
  return fetch("https://random-data-api.com/api/users/random_user")
    .then((res) => res.json())
    .then((user) => {
      return user as User;
    })
    .catch(() => {
      return getRandomUser();
    });
}

function getWoman(): Promise<User> {
  return getRandomUser().then((user) => {
    if (user.gender === "Female") {
      return user;
    }
    return getWoman();
  });
}

getWoman().then((res) => console.log(res));
