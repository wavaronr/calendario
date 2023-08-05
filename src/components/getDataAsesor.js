export const getDataAsesor = async (id) => {
  const url = `http://localhost:3004/posts/${id}`;
  // levantar servidor con json-server --watch db.json
  let dataProfile = [];
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    dataProfile = [
      ...data.objetc.map((object) => {
        return {
          id: object.id,
          name: object.name,
          cargo: object.cargo,
          buttons: object.buttons,
        };
      }),
    ];
  } else {
    console.error('sin data');
  }

  return dataProfile;
};
