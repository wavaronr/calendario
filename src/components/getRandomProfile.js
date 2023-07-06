import dataAsesor from "../data/dataAsesor.json"

function getRandomProfile() {
    const randomUsers = [];
    const users =dataAsesor
    const availableIndexes = Array.from({ length: users.length }, (_, index) => index); // Array con índices disponibles
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * availableIndexes.length); // Obtener índice aleatorio
      const user = users[availableIndexes[randomIndex]]; // Obtener usuario correspondiente al índice aleatorio
      randomUsers.push(user); // Agregar usuario a la lista de usuarios aleatorios
      availableIndexes.splice(randomIndex, 1); // Eliminar el índice utilizado para evitar repeticiones
    }
  
    return randomUsers;
  }
  
  export default getRandomProfile