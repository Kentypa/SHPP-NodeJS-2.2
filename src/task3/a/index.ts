import { Names } from "../types/names-type";
import fetch from "node-fetch";

async function getName(): Promise<Names> {
  const response = await fetch(
    "https://random-data-api.com/api/name/random_name",
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as Names;
}

async function getNameAlways(): Promise<Names> {
  let name: Names;

  while (true) {
    try {
      name = await getName();
      if (name !== null && name !== undefined) {
        return name;
      }
    } catch (error) {}
  }
}

async function getNames() {
  try {
    return Promise.all([getNameAlways(), getNameAlways(), getNameAlways()]);
  } catch (error) {
    throw error;
  }
}

getNames()
  .then((data) => console.log(data.map((item) => item.name)))
  .catch((error) => {
    console.log(error);
  });
