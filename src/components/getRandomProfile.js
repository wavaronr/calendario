// import dataAsesor from "../data/dataAsesor.json";
import { getDataAsesor } from "./getDataAsesor";

async function getRandomProfile() {
  const randomUsers = [];

  try {
    const userApi = await getDataAsesor(1);

    const users = userApi;

    const availableIndexes = Array.from(
      { length: users.length },
      (_, index) => index
    );

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * availableIndexes.length);
      const user = users[availableIndexes[randomIndex]];
      randomUsers.push(user);
      availableIndexes.splice(randomIndex, 1);
    }

    return randomUsers;
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return [];
  }
}

export default getRandomProfile;
