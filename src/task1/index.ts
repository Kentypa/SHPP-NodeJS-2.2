import fetch from "node-fetch";

type IPType = {
  ip: string;
};

fetch("https://api.ipify.org?format=json")
  .then((res) => res.json() as Promise<IPType>)
  .then((data) => {
    console.log(data.ip);
  });
