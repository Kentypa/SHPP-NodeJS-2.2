import fetch from "node-fetch";
import { IPType } from "./types/ip";

async function getIP(): Promise<string> {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = (await response.json()) as IPType;
  return data.ip;
}

async function function1(callback: (ip: string) => string): Promise<string> {
  const ip = await getIP();
  return callback(ip);
}

async function function2(): Promise<string> {
  return function1((ip) => ip);
}

async function test() {
  const result: string = await function2();
  console.log(result);
}

test();
