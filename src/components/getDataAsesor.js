export const getDataAsesor = async (id) => {
const url = new URL( "http://localhost:3004/posts/");

  // levantar servidor con json-server --watch db.json
  let dataProfile = [];
  const response = await fetch(url+(id));
  if (response.ok) {
    const data = await response.json();
    dataProfile = [
      ...data.objetc.map((object) => {
        return object
      }),
    ];
  } else {
    console.error('sin data');
  }

  return dataProfile;
};
