export const getDataProfile = async () => {
  //const url = `http://localhost:3004/advisers/${id}`;
  const url = `http://localhost:3004/profiles`
  // levantar servidor con json-server --watch db.json
  let dataProfile = [];
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    // dataProfile = [
    //   ...data.objetc.map((object) => {
    //     return object;
    //   }),
    // ];

    return data
  } else {
    console.error('sin data');
  }

  return dataProfile;
};

export const getAllDataAsesor = async () => {
  const url = `http://localhost:3004/advisers`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return [];
  }
};
