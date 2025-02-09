type IPType = {
  ip: string;
};

async function getIP(): Promise<string> {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = (await response.json()) as IPType;
    return data.ip;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

getIP().then((data) => console.log(data));
