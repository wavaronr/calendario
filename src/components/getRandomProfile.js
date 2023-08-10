<<<<<<< HEAD
// import dataAsesor from "../data/dataAsesor.json";// temporal
import { getDataAsesor } from "./getDataAsesor";
=======
// import dataAsesor from "../data/dataAsesor.json";
import { getDataAsesor } from './getDataAsesor';
>>>>>>> 3488a69a7ac8d4fddbe8c98430e955b14669eb4d

async function getRandomProfile() {
  const randomUsers = [];

  const urlGet = "allProfiles"
  try {
<<<<<<< HEAD
    const userApi= await getDataAsesor(urlGet);

    // const userApi=dataAsesor // temporal
=======
    const userApi = await getDataAsesor(1);
    const users = userApi;
>>>>>>> 3488a69a7ac8d4fddbe8c98430e955b14669eb4d

    const availableIndexes = Array.from(
      { length: userApi.length },
      (_, index) => index
    );

    for (let j = 0; j < 52; j++) {
      const currentAvailableIndexes = [...availableIndexes];
      const usuariosAleatorios = [];
    
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * currentAvailableIndexes.length);
        const user = userApi[currentAvailableIndexes[randomIndex]];
        usuariosAleatorios.push(user);
        currentAvailableIndexes.splice(randomIndex, 1);
      }
    
      randomUsers.push(usuariosAleatorios);
    }
        return randomUsers;
    
  } catch (error) {
    console.error(error);
    return [];
  }
  
}

export default getRandomProfile;
