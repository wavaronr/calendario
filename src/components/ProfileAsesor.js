function ProfileAsesor() {
    const profiles = [
      {
        name: "Juan Perez",
        cargo: "Gestor de servicios I",
        buttons: ["Botón 1", "Botón 2"]
      },
      {
        name: "Pedro Gonzalez",
        cargo: "Gestor de servicios II",
        buttons: ["Botón 3", "Botón 4"]
      },
      {
        name: "Luis Rodriguez",
        cargo: "Gestor de servicios III",
        buttons: ["Botón 5", "Botón 6"]
      },
      {
        name: "Jose Rodriguez",
        cargo: "Gestor de servicios I",
        buttons: ["Botón 7", "Botón 8"]
      }
    ];
  
    return (
      <>
        {profiles.map(({name,cargo,buttons}, index) => (
          <div className="card" key={index}>
            <h5 className="card-title">Zona {index+1}</h5>
            <div className="card-body">
              <p className="card-text">
                Asesor: {name}
                <br />
                Cargo: {cargo}
                </p>
                {buttons.map((button, buttonIndex) => (
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
  