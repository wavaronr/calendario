const holydays = async (YearInput) => {
  const year = YearInput; // Año para el cual quieres obtener los días festivos
  const url = `https://date.nager.at/api/v3/publicholidays/${year}/CO`;

  const getHolydaysData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const days = [];
      data.forEach((item) => {
        const fechaArray = item.date.split("-");
        const diaF = parseInt(fechaArray[2]);
        const mesF = parseInt(fechaArray[1]);
        days.push({ dia: diaF, mes: mesF-1 });
      });
      return days;
    } catch (err) {
      console.error("Error al obtener los datos", err);
      return []; // En caso de error, retornar un array vacío
    }
  };

  const colombianHolydays = await getHolydaysData();

  //console.log(colombianHolydays);
  return colombianHolydays;
};

export default holydays;

/*var colombianHolydays = [
    { dia: 2, mes: 0 },
    { dia: 20, mes: 6 },
    { dia: 7, mes: 7 },
    { dia: 2, mes: 4 },
    { dia: 12, mes: 5 },
    { dia: 14, mes: 5 },
  ];*/

  /*
  function getDataApiHolydays(data)  {
    for (let i = 0; i < data.length; i++) {
      const fechaArray = data[i].date.split("-");
      const diaF = parseInt(fechaArray[2]);
      const mesF = parseInt(fechaArray[1]);
      colombianHolydays.push({ dia: diaF, mes: mesF });
      console.log(colombianHolydays)
    }
    console.log("desepues",colombianHolydays)
    
    return colombianHolydays;
  };*/
  
 // getHolydaysData();
