import fetch from "node-fetch";
import { IPType } from "./types/ip";

async function function1(): Promise<string> {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = (await response.json()) as IPType;
  return data.ip;
}

function function2(callback: (ip: string) => void): void {
  function1().then(callback);
}

function2((ip) => {
  console.log(`ip: ${ip}`);
});
