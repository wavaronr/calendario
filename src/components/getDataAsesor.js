export const getDataAsesor = async (id) => {
  const url = `http://localhost:3004/advisers/${id}`;
  // levantar servidor con json-server --watch db.json
  let dataProfile = [];
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    dataProfile = [
      ...data.objetc.map((object) => {
        return object;
      }),
    ];
  } else {
    console.error('sin data');
  }

  return dataProfile;
};

export const getAllDataAsesor = async () => {
  const url = `http://localhost:3004/advisers`;
  // levantar servidor con json-server --watch db.json
  let dataProfile = [];
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    dataProfile = [
      ...data.map((object) => {
        return object;
      }),
    ];
  } else {
    console.error('sin data');
  }

  return dataProfile;
};
