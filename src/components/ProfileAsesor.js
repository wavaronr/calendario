function ProfileAsesor() {
    const profiles = [
      {
        name: "Juan Perez",
        cargo: "Descripción del perfil 1",
        buttons: ["Botón 1", "Botón 2"]
      },
      {
        name: "Pedro Gonzalez",
        cargo: "Descripción del perfil 2",
        buttons: ["Botón 3", "Botón 4"]
      },
      {
        name: "Luis Rodriguez",
        cargo: "Descripción del perfil 3",
        buttons: ["Botón 5", "Botón 6"]
      },
      {
        name: "Jose Rodriguez",
        cargo: "Descripción del perfil 4",
        buttons: ["Botón 7", "Botón 8"]
      }
    ];
  
    return (
      <>
        {profiles.map((profile, index) => (
          <div className="card" key={index}>
            <h5 className="card-title">{profile.name}</h5>
            <div className="card-body">
              <p className="card-text">{profile.cargo}</p>
              {profile.buttons.map((button, buttonIndex) => (
                <button className="btn btn-outline-primary" key={buttonIndex}>
                  {button}
                </button>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default ProfileAsesor;
  