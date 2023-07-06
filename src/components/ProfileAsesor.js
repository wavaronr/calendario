import getRandomProfile from "./getRandomProfile"

function ProfileAsesor() {
    const profiles = getRandomProfile()
  
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
  