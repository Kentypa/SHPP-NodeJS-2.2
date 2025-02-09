import { Names } from "../types/names-type";
import fetch from "node-fetch";

function getName(): Promise<Names> {
  return fetch("https://random-data-api.com/api/name/random_name")
    .then((response) => response.json())
    .then((data) => {
      return data as Names;
    })
    .catch(() => {
      return getName();
    });
}

function getNames(): Promise<Names>[] {
  return [getName(), getName(), getName()];
}

getNames().map((item) => item.then((names) => console.log(names.name)));
